import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { Button } from '../common';
import { FormField, Input, Select } from '../form';
import type { ReactComponent } from '@/types/react';

export type CriteriaProps = {
  index: number;
  onRemove?: () => void;
  onAdd: () => void;
};

export const CriteriaRow: ReactComponent<CriteriaProps> = ({ index, onAdd, onRemove }) => {
  const { t } = useTranslation();
  const { register } = useFormContext();
  const fieldPrefix = `criterias.[${index}].`;

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
          <Input id={`${fieldPrefix}value`} {...register(`${fieldPrefix}value`)} />
        </FormField>
      </div>
      <div className="flex gap-4 items-end justify-end py-2 w-[200px]">
        <Button onClick={onAdd}>{t('form.filter.button.new-row')}</Button>
        {!!onRemove && <Button onClick={onRemove}>{t('form.filter.button.remove-row')}</Button>}
      </div>
    </div>
  );
};
