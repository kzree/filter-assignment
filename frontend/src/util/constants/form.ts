import type { Option } from '@/components/form';

export const CRITERIA_FIELD_OPTIONS: Array<Option> = [
  { label: 'form.filter.criteria.field.amount', value: 'AMOUNT' },
  { label: 'form.filter.criteria.field.title', value: 'TITLE' },
  { label: 'form.filter.criteria.field.date', value: 'DATE' },
];

export const AMOUNT_OPERATOR_OPTIONS: Array<Option> = [
  { label: 'form.filter.criteria.operator.equals', value: 'EQUALS' },
  { label: 'form.filter.criteria.operator.greater-than', value: 'MORE_THAN' },
  { label: 'form.filter.criteria.operator.less-than', value: 'LESS_THAN' },
];

export const DATE_OPERATOR_OPTIONS: Array<Option> = [
  { label: 'form.filter.criteria.operator.equals', value: 'EQUALS' },
  { label: 'form.filter.criteria.operator.from', value: 'FROM' },
  { label: 'form.filter.criteria.operator.to', value: 'TO' },
];

export const DEFAULT_OPERATOR_OPTIONS: Array<Option> = [
  { label: 'form.filter.criteria.operator.equals', value: 'EQUALS' },
  { label: 'form.filter.criteria.operator.starts-with', value: 'STARTS_WITH' },
  { label: 'form.filter.criteria.operator.ends-with', value: 'ENDS_WITH' },
];
