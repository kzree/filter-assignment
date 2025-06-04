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

export const AMOUNT_DEFAULT_OPERATOR = 'EQUALS';
export const AMOUNT_DEFAULT_VALUE = '0';
export const DATE_DEFAULT_OPERATOR = 'FROM';
export const DATE_DEFAULT_VALUE = '';
export const TEXT_DEFAULT_OPERATOR = 'STARTS_WITH';
export const TEXT_DEFAULT_VALUE = '';

export const NEW_CRITERIA = { field: 'AMOUNT', operator: 'EQUAL', value: '0' };
