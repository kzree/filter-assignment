import { z } from 'zod';
import { FormErrorMessage } from '../enum';

export const filterFormSchema = z.object({
  name: z.string().min(1, FormErrorMessage.REQUIRED),
  criterias: z.array(
    z.object({
      field: z.string().min(1, FormErrorMessage.REQUIRED),
      operator: z.string().min(1, FormErrorMessage.REQUIRED),
      value: z.string().min(1, FormErrorMessage.REQUIRED),
    }),
  ),
});

export type FilterFormData = z.infer<typeof filterFormSchema>;
