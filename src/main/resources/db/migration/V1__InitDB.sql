create sequence hibernate_sequence start 4 increment 1;

create table employees(
    id         int8 not null,
    address    varchar(255),
    city       varchar(255),
    first_name varchar(255),
    last_name  varchar(255),
    telephone  varchar(255),
    primary key (id)
);