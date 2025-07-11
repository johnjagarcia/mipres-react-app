"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { estadoOptions } from "../data/data";
import type { useForm } from "react-hook-form";

interface FormSchema {
  no_id_paciente?: string;
  estado?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
}

interface DataTableFilterFormProps {
  form: ReturnType<typeof useForm<FormSchema>>;
}

export function DataTableFilterForm({ form }: DataTableFilterFormProps) {
  return (
    <Form {...form}>
      <form className="space-y-6">
        {/* ID del Paciente */}
        <FormField
          control={form.control}
          name="no_id_paciente"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">ID del Paciente</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el ID del paciente" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Estado */}
        <FormField
          control={form.control}
          name="estado"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  {estadoOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fechas */}
        <div className="space-y-4">
          <FormLabel className="text-base">Rango de Fechas</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fecha_inicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Desde</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fecha_fin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Hasta</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormMessage />
      </form>
    </Form>
  );
}
