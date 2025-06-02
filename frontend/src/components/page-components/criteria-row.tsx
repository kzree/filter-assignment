import { useTranslation } from 'react-i18next';
import { Button } from '../common';
import { FormField, Input, Select } from '../form';
import type { ReactComponent } from '@/types/react';

export type CriteriaProps = {
  index: number;
  showRemove: boolean;
  onRemove: () => void;
  onAdd: () => void;
};

export const CriteriaRow: ReactComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-3 gap-4 w-full">
        <FormField label="form.filter.label.criteria.field" htmlFor="criteria-field">
          <Select id="criteria-field" options={[{ label: 'hello', value: 'hello' }]} />
        </FormField>
        <FormField label="form.filter.label.criteria.operator" htmlFor="criteria-operator">
          <Select id="criteria-operator" options={[{ label: 'hello', value: 'hello' }]} />
        </FormField>
        <FormField label="form.filter.label.criteria.value" htmlFor="criteria-value">
          <Input id="criteria-value" />
        </FormField>
      </div>
      <div className="flex gap-4 items-end py-2">
        <Button>{t('form.filter.button.new-row')}</Button>
        <Button>{t('form.filter.button.remove-row')}</Button>
      </div>
    </div>
  );
};
