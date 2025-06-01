import { z } from 'zod';

export const filterFormSchema = z.object({
  name: z.string().min(1, 'form.error.required'),
  criterias: z.array(
    z.object({
      field: z.string().min(1, 'form.error.required'),
      operator: z.string().min(1, 'form.error.required'),
      value: z.string().min(1, 'form.error.required'),
    }),
  ),
});

export type FilterFormData = z.infer<typeof filterFormSchema>;
