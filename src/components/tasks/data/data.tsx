import { CheckCircle, CircleOff, Timer } from "lucide-react";
import tasksData from "./tasks.json";

export const tasks = tasksData;

export const tipoTecOptions = [
  {
    value: "M",
    label: "Medicamento",
  },
  {
    value: "S",
    label: "Servicio",
  },
];

export const estadoOptions = [
  {
    value: "DIRECCIONADO",
    label: "Direccionado",
    icon: CheckCircle,
  },
  {
    value: "PENDIENTE",
    label: "Pendiente",
    icon: Timer,
  },
  {
    value: "ANULADO",
    label: "Anulado",
    icon: CircleOff,
  },
];

export const tipoIdOptions = [
  {
    value: "CC",
    label: "Cédula de Ciudadanía",
  },
  {
    value: "TI",
    label: "Tarjeta de Identidad",
  },
  {
    value: "RC",
    label: "Registro Civil",
  },
  {
    value: "PT",
    label: "Permiso Temporal",
  },
];

export const epsOptions = [
  {
    value: "EPS010",
    label: "EPS010",
  },
  {
    value: "EPSS10",
    label: "EPSS10",
  },
  {
    value: "EPS008",
    label: "EPS008",
  },
];
