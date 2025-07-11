"use client";

import { columns } from "@/components/tasks/components/columns";
import { DataTable } from "@/components/tasks/components/data-table";
import { axiosInstance } from "@/plugins/axios";
import type { DispensationResponse } from "@/types/process.response";
import { Suspense, use } from "react";

async function getDispensationData() {
  const response = await axiosInstance.get<DispensationResponse>(
    "/consulta/procesos"
  );

  return response.data.items || [];
}

const dataPromise = getDispensationData();

export default function TaskPage() {
  const data = use(dataPromise);

  return (
    <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
      <Suspense fallback={<h1>Cargando...</h1>}>
        <DataTable data={data} columns={columns} />
      </Suspense>
    </div>
  );
}
