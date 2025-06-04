import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { api } from '../api';
import type { Filter } from '@/types/api';
import type { FilterFormData } from '../schema';

const PATH = 'filters';

export const getFilters = async (): Promise<Array<Filter>> => {
  const res = api.get(PATH);

  return await res.json();
};

export const saveFilter = async (filter: FilterFormData): Promise<Filter> => {
  const res = api.post(PATH, { json: filter });

  return res.json();
};

export const deleteFilter = async (filterId: string): Promise<void> => {
  const res = api.delete(`${PATH}/${filterId}`);
  return res.json();
};

export const useFilters = () => {
  const { data, status } = useSuspenseQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
  });

  return { filters: data, status };
};

export const useSaveFilter = (onSuccess?: () => void) => {
  const { mutate, status } = useMutation({
    mutationKey: ['saveFilter'],
    mutationFn: saveFilter,
    onSuccess,
  });

  return { saveFilter: mutate, status };
};

export const useDeleteFilter = (onSuccess?: () => void) => {
  const { mutate, status } = useMutation({
    mutationKey: ['deleteFilter'],
    mutationFn: (filterId: string) => deleteFilter(filterId),
    onSuccess,
  });

  return { deleteFilter: mutate, status };
};
