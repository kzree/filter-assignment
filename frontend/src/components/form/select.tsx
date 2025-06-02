import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import type { ReactComponent } from '@/types/react';

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Array<Option>;
};

export const Select: ReactComponent<
  SelectProps &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
> = ({ options, ...rest }) => {
  const { t } = useTranslation();

  return (
    <select
      {...rest}
      className={clsx(
        'border rounded px-3 h-10 transition-all',
        'border-gray-300 hover:border-gray-400 active:border-gray-400',
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {t(option.label)}
        </option>
      ))}
    </select>
  );
};
