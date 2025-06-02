import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { Table } from '../common';
import type { ColumnDef } from '@tanstack/react-table';
import type { Filter } from '@/types/api';
import { useFilters } from '@/util/services';

const columnHelper = createColumnHelper<Filter>();

export const FilterTable = () => {
  const { t } = useTranslation();
  const { filters } = useFilters();

  const columns = useMemo(
    () =>
      [
        columnHelper.accessor('name', {
          header: t('page.filters.table.row.name'),
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('criterias', {
          header: t('page.filters.table.row.criterias'),
          cell: (info) => info.getValue().length,
        }),
        columnHelper.accessor('createdAt', {
          header: t('page.filters.table.row.createdAt'),
          cell: (info) => new Date(info.getValue()).toLocaleDateString(),
        }),
        columnHelper.accessor('id', {
          header: '',
          cell: () => (
            <div className="flex gap-2">
              <button>{t('common.edit')}</button>
              <button>{t('common.delete')}</button>
            </div>
          ),
        }),
      ] as Array<ColumnDef<Filter>>,
    [],
  );

  return <Table data={filters} columns={columns} />;
};
