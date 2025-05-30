create table filter (
    id uuid not null primary key,
    name text not null,
    created_at timestamp not null,
    modified_at timestamp not null
);

create table criteria (
    id uuid not null primary key,
    filter_id uuid not null references filter(id) on delete cascade,
    field text not null,
    operator text not null,
    value text not null,
    created_at timestamp not null,
    modified_at timestamp not null
);
