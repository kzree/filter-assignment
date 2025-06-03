import { useFieldArray, useFormContext } from 'react-hook-form';
import { CriteriaRow } from './criteria-row';

const NEW_CRITERIA = { field: 'AMOUNT', operator: 'EQUAL', value: '0' };

export const Criterias = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `criterias`,
  });

  return (
    <div className="space-y-6">
      {fields.map((field, idx) => {
        const key = `criteria-${field.id}`;
        return (
          <CriteriaRow
            key={key}
            index={idx}
            onAdd={() => append(NEW_CRITERIA)}
            onRemove={fields.length > 1 ? () => remove(idx) : undefined}
          />
        );
      })}
    </div>
  );
};
