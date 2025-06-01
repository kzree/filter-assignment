export type Entity = {
  id: string;
  createdAt: string;
  modifiedAt: string;
};

export type Filter = {
  name: string;
  criterias: Array<Criteria>;
} & Entity;

export type Criteria = {
  field: string;
  operator: string;
  value: string;
} & Entity;
