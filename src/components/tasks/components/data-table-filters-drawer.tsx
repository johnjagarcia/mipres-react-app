"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DataTableFilterForm } from "./data-table-filter-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FilterSchema = z.object({
  no_id_paciente: z.string().optional(),
  estado: z.string().optional(),
  fecha_inicio: z.string().optional(),
  fecha_fin: z.string().optional(),
});

interface DataTableFiltersDrawerProps {
  onFiltersChange: (filters: z.infer<typeof FilterSchema>) => void;
}

export function DataTableFiltersDrawer({
  onFiltersChange,
}: DataTableFiltersDrawerProps) {
  // Obtener fecha actual y primer día del mes
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const form = useForm<z.infer<typeof FilterSchema>>({
    defaultValues: {
      no_id_paciente: "",
      estado: "PENDIENTE",
      fecha_inicio: firstDayOfMonth.toISOString().split("T")[0],
      fecha_fin: today.toISOString().split("T")[0],
    },
  });

  const handleApplyFilters = () => {
    const formData = form.getValues();
    onFiltersChange(formData);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Filtros</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Filtros</DrawerTitle>
            <DrawerDescription>
              Selecciona los filtros según tu necesidad.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ScrollArea className="h-64">
              <DataTableFilterForm form={form} />
            </ScrollArea>
          </div>
          <DrawerFooter>
            <Button onClick={handleApplyFilters}>Filtrar</Button>
            <DrawerClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
