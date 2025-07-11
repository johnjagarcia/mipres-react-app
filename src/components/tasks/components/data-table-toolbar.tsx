"use client";


import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import { DataTableFiltersDrawer } from "./data-table-filters-drawer";


export function DataTableToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex ml-auto items-center gap-2">
        <Button size="sm" className="ml-auto hidden h-8 lg:flex">
          <IconDownload />
          Descargar
        </Button>
        <DataTableFiltersDrawer />
      </div>
    </div>
  );
}
