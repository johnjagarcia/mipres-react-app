import { z } from "zod"

// Schema based on the actual tasks.json data structure
export const dispensationSchema = z.object({
  id: z.number(),
  id_direccionamiento: z.string(),
  no_prescripcion: z.string(),
  tipo_tec: z.string(),
  con_tec: z.number(),
  tipo_id_paciente: z.string(),
  no_id_paciente: z.string(),
  no_entrega: z.number(),
  no_sub_entrega: z.number(),
  tipo_id_prov: z.string(),
  no_id_prov: z.string(),
  cod_mun_ent: z.string(),
  fec_max_ent: z.string(),
  cant_tot_a_entregar: z.number(),
  dir_paciente: z.string(),
  cod_ser_tec_a_entregar: z.string(),
  no_id_eps: z.string(),
  cod_eps: z.string(),
  fec_direccionamiento: z.string(),
  est_direccionamiento: z.number(),
  fec_anulacion: z.string().nullable(),
  id_mipres: z.string().nullable(),
  datos_json: z.string().nullable(),
  estado: z.string(),
  fecha_estado: z.string().nullable(),
  mensaje_error: z.string().nullable(),
  fecha_programacion: z.string().nullable(),
  id_programacion: z.string().nullable(),
  lote_id: z.number(),
})

export type Dispensation = z.infer<typeof dispensationSchema>
