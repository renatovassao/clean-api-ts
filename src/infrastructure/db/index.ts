import type { Knex } from "knex";
import type { Tables } from "knex/types/tables";

import type { Insert } from "../../application/db";

export function insert<T extends Tables[keyof Tables]>(
  knex: Knex,
  table: keyof Tables
): Insert<T> {
  return async t => {
    const [_t] = await knex(table).insert(t).returning("*");

    return _t as T;
  };
}
