"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { type Dispensation } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Dispensation>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "no_prescripcion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prescripción" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate font-medium">
          {row.getValue("no_prescripcion")}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "tipo_tec",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo Técnica" />
    ),
    cell: ({ row }) => {
      const tipoTec = row.getValue("tipo_tec") as string;
      const label = tipoTec === "M" ? "Medicamento" : "Servicio";

      return (
        <div className="flex gap-2">
          <Badge variant={tipoTec === "M" ? "default" : "secondary"}>
            {label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "tipo_id_paciente",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo ID Paciente" />
    ),
    cell: ({ row }) => {
      const tipoId = row.getValue("tipo_id_paciente") as string;
      const noId = row.original.no_id_paciente;

      return (
        <div className="flex flex-col">
          <span className="font-medium">{tipoId}</span>
          <span className="text-sm text-muted-foreground">{noId}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "estado",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estado" />
    ),
    cell: ({ row }) => {
      const estado = row.getValue("estado") as string;

      return (
        <div className="flex items-center gap-2">
          <Badge
            variant={estado === "DIRECCIONADO" ? "default" : "destructive"}
          >
            {estado}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "cant_tot_a_entregar",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cantidad" />
    ),
    cell: ({ row }) => {
      const cantidad = row.getValue("cant_tot_a_entregar") as number;

      return <div className="text-right font-medium">{cantidad}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "fec_max_ent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fecha Máx Entrega" />
    ),
    cell: ({ row }) => {
      const fecha = row.getValue("fec_max_ent") as string;

      return (
        <div className="text-sm">
          {new Date(fecha).toLocaleDateString("es-ES")}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "cod_eps",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EPS" />
    ),
    cell: ({ row }) => {
      const codEps = row.getValue("cod_eps") as string;
      const noIdEps = row.original.no_id_eps;

      return (
        <div className="flex flex-col">
          <span className="font-medium">{codEps}</span>
          <span className="text-sm text-muted-foreground">{noIdEps}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "fec_direccionamiento",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fecha Direccionamiento" />
    ),
    cell: ({ row }) => {
      const fecha = row.getValue("fec_direccionamiento") as string;

      return (
        <div className="text-sm">
          {new Date(fecha).toLocaleDateString("es-ES")}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
