"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { tipoTecOptions, estadoOptions } from "../data/data";

const FormSchema = z.object({
  tipoTec: z.array(z.string()).optional(),
  estado: z.array(z.string()).optional(),
  fechaDesde: z.string().optional(),
  fechaHasta: z.string().optional(),
});

export function DataTableFilterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tipoTec: [],
      estado: [],
      fechaDesde: "",
      fechaHasta: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-6">
        {/* Tipo de Técnica */}
        <FormField
          control={form.control}
          name="tipoTec"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Tipo de Técnica</FormLabel>
              </div>
              {tipoTecOptions.map((option) => (
                <FormField
                  key={option.value}
                  control={form.control}
                  name="tipoTec"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={option.value}
                        className="flex flex-row items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...(field.value || []),
                                    option.value,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== option.value
                                    ) || []
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </FormItem>
          )}
        />

        {/* Estado */}
        <FormField
          control={form.control}
          name="estado"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Estado</FormLabel>
              </div>
              {estadoOptions.map((option) => (
                <FormField
                  key={option.value}
                  control={form.control}
                  name="estado"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={option.value}
                        className="flex flex-row items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...(field.value || []),
                                    option.value,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== option.value
                                    ) || []
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </FormItem>
          )}
        />

        {/* Fechas */}
        <div className="space-y-4">
          <FormLabel className="text-base">Rango de Fechas</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fechaDesde"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Desde</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaHasta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Hasta</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
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
