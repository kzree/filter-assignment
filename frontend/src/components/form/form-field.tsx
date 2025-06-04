import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { FormError } from './form-error';
import type { ReactComponent } from '@/types/react';

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

export const FormField: ReactComponent<FormFieldProps> = ({
  children,
  label,
  htmlFor,
  required = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <label
        className={clsx('font-semibold', {
          'after:content-["*"] after:text-red-500 after:ml-0.5': required,
        })}
        htmlFor={htmlFor}
      >
        {t(label)}
      </label>
      {children}
      <FormError fieldId={htmlFor} />
    </div>
  );
};
