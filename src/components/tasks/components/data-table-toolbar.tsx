"use client";

import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import { DataTableFiltersDrawer } from "./data-table-filters-drawer";
import type { ProcessFilters } from "@/services/processService";

interface DataTableToolbarProps {
  onFiltersChange?: (filters: ProcessFilters) => void;
}

export function DataTableToolbar({ onFiltersChange }: DataTableToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex ml-auto items-center gap-2">
        <Button size="sm" className="ml-auto hidden h-8 lg:flex">
          <IconDownload />
          Descargar
        </Button>
        <DataTableFiltersDrawer
          onFiltersChange={onFiltersChange ?? (() => {})}
        />
      </div>
    </div>
  );
}
