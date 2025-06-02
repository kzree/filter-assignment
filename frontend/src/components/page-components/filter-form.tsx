import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { FormField, Input } from '../form';
import { Button } from '../common';
import { CriteriaRow } from './criteria-row';
import type { FilterFormData } from '@/util/schema';
import { filterFormSchema } from '@/util/schema';

const FilterForm = () => {
  const { t } = useTranslation();
  const { handleSubmit, register } = useFormContext<FilterFormData>();

  const onSubmit = (data: FilterFormData) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="form.filter.label.name" htmlFor="name">
            <Input id="name" {...register('name')} />
          </FormField>
        </div>
        <CriteriaRow />
        <div className="flex justify-end">
          <Button type="submit">{t('form.submit')}</Button>
        </div>
      </div>
    </form>
  );
};

export const FilterFormWithContext = () => {
  const methods = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <FilterForm />
    </FormProvider>
  );
};
