export const FormErrorMessage = {
  REQUIRED: 'form.error.required',
} as const;

export type FormErrorMessage = (typeof FormErrorMessage)[keyof typeof FormErrorMessage];
