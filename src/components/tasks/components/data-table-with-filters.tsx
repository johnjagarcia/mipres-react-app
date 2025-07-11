"use client";

import { columns } from "@/components/tasks/components/columns";
import { DataTable } from "@/components/tasks/components/data-table";
import { axiosInstance } from "@/plugins/axios";
import type { DispensationResponse } from "@/types/process.response";
import React, { useState } from "react";
import type { ProcessFilters } from "@/services/processService";

// Valores por defecto para los filtros
const defaultFilters: ProcessFilters = {
  no_id_paciente: "",
  estado: "PENDIENTE",
  fecha_inicio: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    .toISOString()
    .split("T")[0],
  fecha_fin: new Date().toISOString().split("T")[0],
  skip: 0,
  take: 10,
};

// Función para crear la promesa de datos con filtros
function createDataPromise(filters: ProcessFilters) {
  const params = new URLSearchParams();

  if (filters.no_id_paciente) {
    params.append("no_id_paciente", filters.no_id_paciente);
  }
  if (filters.estado) {
    params.append("estado", filters.estado);
  }
  if (filters.fecha_inicio) {
    params.append("fecha_inicio", filters.fecha_inicio);
  }
  if (filters.fecha_fin) {
    params.append("fecha_fin", filters.fecha_fin);
  }
  /* if (filters.skip !== undefined) {
    params.append("skip", filters.skip.toString());
  }
  if (filters.take !== undefined) {
    params.append("take", filters.take.toString());
  } */

  return axiosInstance
    .get<DispensationResponse>(`/consulta/procesos?${params.toString()}`)
    .then((response) => response.data.items || []);
}

// Componente principal que maneja los filtros
export function DataTableWithFilters() {
  const [filters, setFilters] = useState<ProcessFilters>(defaultFilters);
  const [data, setData] = useState<DispensationResponse["items"]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos iniciales
  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await createDataPromise(filters);
        setData(result);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [filters]);

  const handleFiltersChange = (newFilters: ProcessFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters, skip: 0 }));
  };

  const handlePaginationChange = (pageIndex: number, pageSize: number) => {
    setFilters((prev) => ({
      ...prev,
      skip: pageIndex * pageSize,
      take: pageSize,
    }));
  };

  if (loading) {
    return (
      <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
      <DataTable
        data={data}
        columns={columns}
        onFiltersChange={handleFiltersChange}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  );
}
