import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { Button, Table } from '../common';
import { CriteriaDisplay } from './criteria-display';
import type { ColumnDef } from '@tanstack/react-table';
import type { Filter } from '@/types/api';
import { useDeleteFilter, useFilters } from '@/util/services';

const columnHelper = createColumnHelper<Filter>();

export const FilterTable = () => {
  const { t } = useTranslation();
  const { filters } = useFilters();

  const handleDeleteSuccess = () => {
    window.location.reload();
  };

  const { deleteFilter } = useDeleteFilter(handleDeleteSuccess);

  const columns = useMemo(
    () =>
      [
        columnHelper.accessor('name', {
          header: t('page.filters.table.row.name'),
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('criterias', {
          header: t('page.filters.table.row.criterias'),
          cell: (info) => <CriteriaDisplay criterias={info.getValue()} />,
        }),
        columnHelper.accessor('createdAt', {
          header: t('page.filters.table.row.createdAt'),
          cell: (info) => new Date(info.getValue()).toLocaleDateString(),
        }),
        columnHelper.accessor('id', {
          header: '',
          cell: (info) => {
            const id = info.getValue();
            return (
              <Button onClick={() => deleteFilter(id)}>
                {t('page.filters.button.delete-filter')}
              </Button>
            );
          },
          meta: {
            width: 100,
          },
        }),
      ] as Array<ColumnDef<Filter>>,
    [],
  );

  return <Table data={filters} columns={columns} />;
};
