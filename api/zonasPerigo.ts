import api from './api';

export interface ZonasPerigo {
  id: string;
  nivelRisco: string;
  raioEmKm: number;
}

export const listarZonas = () => api.get<ZonasPerigo[]>('/zonasperigo');
export const criarZona = (dados: ZonasPerigo) => api.post('/zonasperigo', dados);
export const atualizarZona = (id: string, dados: ZonasPerigo) => api.put(`/zonasperigo/${id}`, dados);
export const deletarZona = (id: string) => api.delete(`/zonasperigo/${id}`);
