import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { Text } from '../common';
import type { ReactComponent } from '@/types/react';

export type FormErrorProps = {
  fieldId: string;
};

export const FormError: ReactComponent<FormErrorProps> = ({ fieldId }) => {
  const { t } = useTranslation();
  const { formState } = useFormContext();
  const error = formState.errors[fieldId];

  if (!error) {
    return null;
  }

  return (
    <Text size="sm" className="text-red-500">
      {t(error.message as string)}
    </Text>
  );
};
