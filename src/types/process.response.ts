export type DispensationResponse = {
    total:      number;
    page:       number;
    pageSize:   number;
    totalPages: number;
    hasNext:    boolean;
    hasPrev:    boolean;
    items:      Item[];
}

type Item = {
    id:                     number;
    id_direccionamiento:    string;
    no_prescripcion:        string;
    tipo_tec:               TipoTec;
    con_tec:                number;
    tipo_id_paciente:       TipoIDPaciente;
    no_id_paciente:         string;
    no_entrega:             number;
    no_sub_entrega:         number;
    tipo_id_prov:           "NI";
    no_id_prov:             string;
    cod_mun_ent:            string;
    fec_max_ent:            string;
    cant_tot_a_entregar:    number;
    dir_paciente:           string;
    cod_ser_tec_a_entregar: string;
    no_id_eps:              string;
    cod_eps:                CodEps;
    fec_direccionamiento:   string;
    est_direccionamiento:   number;
    fec_anulacion:          null;
    id_mipres:              null;
    datos_json:             null;
    estado:                 "DIRECCIONADO";
    fecha_estado:           null;
    mensaje_error:          null;
    fecha_programacion:     null;
    id_programacion:        null;
    lote_id:                number;
}

enum CodEps {
    Eps008 = "EPS008",
    Eps010 = "EPS010",
    Epss10 = "EPSS10",
}

enum TipoIDPaciente {
    Cc = "CC",
    Pt = "PT",
    RC = "RC",
    TI = "TI",
}

enum TipoTec {
    M = "M",
    S = "S",
}