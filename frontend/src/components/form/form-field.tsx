import { useTranslation } from 'react-i18next';
import type { ReactComponent } from '@/types/react';

type FormFieldProps = {
  label: string;
  htmlFor: string;
};

export const FormField: ReactComponent<FormFieldProps> = ({ children, label, htmlFor }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor}>{t(label)}</label>
      {children}
    </div>
  );
};
