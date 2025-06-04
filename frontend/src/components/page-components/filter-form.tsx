import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { FormField, Input } from '../form';
import { Button } from '../common';
import { Criterias } from './criterias';
import type { FilterFormData } from '@/util/schema';
import { filterFormSchema } from '@/util/schema';
import { useSaveFilter } from '@/util/services';
import { NEW_CRITERIA } from '@/util/constants';

const FilterForm = () => {
  const { t } = useTranslation();
  const { handleSubmit, register } = useFormContext<FilterFormData>();

  const handleSuccess = () => {
    window.location.reload();
  };

  const { saveFilter, status } = useSaveFilter(handleSuccess);

  const onSubmit = (data: FilterFormData) => {
    saveFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="form.filter.label.name" htmlFor="name" required>
            <Input id="name" {...register('name')} />
          </FormField>
        </div>
        <Criterias />
        <div className="flex justify-end">
          <Button type="submit" disabled={status === 'pending'}>
            {t('form.submit')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export const FilterFormWithContext = () => {
  const methods = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      name: '',
      criterias: [NEW_CRITERIA],
    },
  });

  return (
    <FormProvider {...methods}>
      <FilterForm />
    </FormProvider>
  );
};
