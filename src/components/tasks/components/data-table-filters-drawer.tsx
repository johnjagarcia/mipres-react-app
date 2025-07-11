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

export function DataTableFiltersDrawer() {
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
              <DataTableFilterForm />
            </ScrollArea>
          </div>
          <DrawerFooter>
            <Button>Filtrar</Button>
            <DrawerClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
