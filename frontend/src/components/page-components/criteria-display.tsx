import type { Criteria } from '@/types/api';
import type { ReactComponent } from '@/types/react';

export type CriteriaDisplayProps = {
  criterias: Array<Criteria>;
};

export const CriteriaDisplay: ReactComponent<CriteriaDisplayProps> = ({ criterias }) => {
  return (
    <ul>
      {criterias.map((criteria) => (
        <li key={criteria.id}>{`${criteria.field} - ${criteria.operator} - ${criteria.value}`}</li>
      ))}
    </ul>
  );
};
