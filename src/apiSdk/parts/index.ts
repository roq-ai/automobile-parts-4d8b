import axios from 'axios';
import queryString from 'query-string';
import { PartInterface, PartGetQueryInterface } from 'interfaces/part';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getParts = async (query?: PartGetQueryInterface): Promise<PaginatedInterface<PartInterface>> => {
  const response = await axios.get('/api/parts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPart = async (part: PartInterface) => {
  const response = await axios.post('/api/parts', part);
  return response.data;
};

export const updatePartById = async (id: string, part: PartInterface) => {
  const response = await axios.put(`/api/parts/${id}`, part);
  return response.data;
};

export const getPartById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePartById = async (id: string) => {
  const response = await axios.delete(`/api/parts/${id}`);
  return response.data;
};
