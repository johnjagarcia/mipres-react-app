"use client";
import { z } from "zod";

import { columns } from "@/components/tasks/components/columns";
import { DataTable } from "@/components/tasks/components/data-table";
import { taskSchema } from "@/components/tasks/data/schema";
import data from "@/components/tasks/data/tasks.json";

// Simulate a database read for tasks.
function getTasks() {
  return z.array(taskSchema).parse(data);
}

export default function TaskPage() {
  const tasks = getTasks();

  return (
    <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
