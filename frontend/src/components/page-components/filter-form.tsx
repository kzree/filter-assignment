import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FilterFormData } from '@/util/schema';
import { filterFormSchema } from '@/util/schema';

const FilterForm = () => {
  const { handleSubmit } = useFormContext<FilterFormData>();

  const onSubmit = (data: FilterFormData) => {
    console.log('Form submitted with data:', data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
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
