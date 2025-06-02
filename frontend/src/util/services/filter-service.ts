import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import type { Filter } from '@/types/api';

const PATH = 'filters';

export const getFilters = async (): Promise<Array<Filter>> => {
  const res = api.get(PATH);

  return await res.json();
};

export const useFilters = () => {
  const { data, status } = useQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
  });

  return { filters: data || [], status };
};
