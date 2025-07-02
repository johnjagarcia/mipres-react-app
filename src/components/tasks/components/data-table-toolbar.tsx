"use client";

import { type Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "./data-table-view-options";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex ml-auto items-center gap-2">
        <Button size="sm" className="ml-auto hidden h-8 lg:flex">
          <IconDownload />
          Descargar
        </Button>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
