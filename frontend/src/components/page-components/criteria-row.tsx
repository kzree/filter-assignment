import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { Button } from '../common';
import { FormField, Input, Select } from '../form';
import type { ReactComponent } from '@/types/react';
import {
  AMOUNT_OPERATOR_OPTIONS,
  CRITERIA_FIELD_OPTIONS,
  DATE_OPERATOR_OPTIONS,
  DEFAULT_OPERATOR_OPTIONS,
} from '@/util/constants';

export type CriteriaProps = {
  index: number;
  onRemove?: () => void;
  onAdd: () => void;
};

export const CriteriaRow: ReactComponent<CriteriaProps> = ({ index, onAdd, onRemove }) => {
  const { t } = useTranslation();
  const { register, watch, setValue } = useFormContext();
  const fieldPrefix = `criterias.${index}.`;

  const fieldValue = watch(`${fieldPrefix}field`);

  useEffect(() => {
    switch (fieldValue) {
      case 'AMOUNT':
        setValue(`${fieldPrefix}operator`, 'EQUALS');
        setValue(`${fieldPrefix}value`, '0');
        break;
      case 'DATE':
        setValue(`${fieldPrefix}operator`, 'FROM', { shouldValidate: true });
        setValue(`${fieldPrefix}value`, '');
        break;
      default:
        setValue(`${fieldPrefix}operator`, 'STARTS_WITH', { shouldValidate: true });
        setValue(`${fieldPrefix}value`, '');
        break;
    }
  }, [fieldValue, fieldPrefix, setValue]);

  const inputType = useMemo(() => {
    switch (fieldValue) {
      case 'AMOUNT':
        return 'number';
      case 'DATE':
        return 'date';
      default:
        return undefined;
    }
  }, [fieldValue]);

  const operatorOptions = useMemo(() => {
    switch (fieldValue) {
      case 'AMOUNT':
        return AMOUNT_OPERATOR_OPTIONS;
      case 'DATE':
        return DATE_OPERATOR_OPTIONS;
      default:
        return DEFAULT_OPERATOR_OPTIONS;
    }
  }, [fieldValue]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <FormField label="form.filter.label.criteria.field" htmlFor={`${fieldPrefix}field`}>
          <Select
            id={`${fieldPrefix}field`}
            options={CRITERIA_FIELD_OPTIONS}
            {...register(`criterias.${index}.field`)} // for some reason, select doesnt work with the ${fieldprefix}name method, I love js and it's "amazing" ecosystem
          />
        </FormField>
        <FormField label="form.filter.label.criteria.operator" htmlFor={`${fieldPrefix}operator`}>
          <Select
            id={`${fieldPrefix}operator`}
            options={operatorOptions}
            {...register(`criterias.${index}.operator`)}
          />
        </FormField>
        <FormField label="form.filter.label.criteria.value" htmlFor={`${fieldPrefix}value`}>
          <Input type={inputType} id={`${fieldPrefix}value`} {...register(`${fieldPrefix}value`)} />
        </FormField>
      </div>
      <div className="flex gap-4 items-end justify-end py-2 w-[200px]">
        <Button onClick={onAdd}>{t('form.filter.button.new-row')}</Button>
        {!!onRemove && <Button onClick={onRemove}>{t('form.filter.button.remove-row')}</Button>}
      </div>
    </div>
  );
};
