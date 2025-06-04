import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';
import type { ColumnDef, Table as ReactTable } from '@tanstack/react-table';
import type { CSSProperties } from 'react';

type TableMeta = {
  width?: string | number;
  minWidth?: string | number;
};

export const TBody = <TData extends object>({ table }: { table: ReactTable<TData> }) => (
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr className="h-14 border-b border-gray-200 last:border-transparent" key={row.id}>
        {row.getVisibleCells().map((cell, idx) => {
          const style: CSSProperties = {};
          const meta = cell.column.columnDef.meta as TableMeta | undefined;

          if (meta?.width) {
            style.width = `${meta.width}px`;
          }

          if (meta?.minWidth) {
            style.minWidth = `${meta.minWidth}px`;
          }

          return (
            <td
              className={clsx('first:pl-3 last:pr-3 text-left text-black text-sm')}
              key={`${cell.id}-${idx}`}
              style={style}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
);

type THeadProps<TData> = {
  table: ReactTable<TData>;
};

export const THead = <TData extends object>({ table }: THeadProps<TData>) => (
  <thead>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr className="h-14 border-b border-gray-200" key={headerGroup.id}>
        {headerGroup.headers.map((header, idx) => {
          const style: CSSProperties = {};
          const meta = header.column.columnDef.meta as TableMeta | undefined;

          if (meta?.width) {
            style.width = `${meta.width}px`;
          }

          if (meta?.minWidth) {
            style.minWidth = `${meta.minWidth}px`;
          }

          return (
            <th
              className={clsx('first:pl-3 last:pr-3 text-left text-black text-sm font-semibold')}
              key={`${header.id}-${idx}`}
              style={style}
            >
              <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
            </th>
          );
        })}
      </tr>
    ))}
  </thead>
);

export type TableProps<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData>>;
};

export const Table = <TData extends object>({ data, columns }: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <THead table={table} />
      <TBody table={table} />
    </table>
  );
};
