import { axiosInstance } from '@/plugins/axios';
import type { DispensationResponse } from '@/types/process.response';

export interface ProcessFilters {
  no_id_paciente?: string;
  estado?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  skip?: number;
  take?: number;
}

export const processService = {
  async getProcesses(filters: ProcessFilters = {}): Promise<DispensationResponse> {
    const params = new URLSearchParams();
    
    if (filters.no_id_paciente) {
      params.append('no_id_paciente', filters.no_id_paciente);
    }
    if (filters.estado) {
      params.append('estado', filters.estado);
    }
    if (filters.fecha_inicio) {
      params.append('fecha_inicio', filters.fecha_inicio);
    }
    if (filters.fecha_fin) {
      params.append('fecha_fin', filters.fecha_fin);
    }
    /* if (filters.skip !== undefined) {
      params.append('skip', filters.skip.toString());
    }
    if (filters.take !== undefined) {
      params.append('take', filters.take.toString());
    } */

    const response = await axiosInstance.get(`/consulta/procesos?${params.toString()}`);
    return response.data;
  }
}; 