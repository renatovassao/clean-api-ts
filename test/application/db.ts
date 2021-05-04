import type { Tables } from "knex/types/tables";

import type { Insert } from "../../src/application/db";

type Db = { [P in keyof Tables]: Array<Tables[P]> };

export function createDb(): Db {
  return {
    users: [],
  };
}

export function insert<T extends Tables[keyof Tables]>(
  db: Db,
  table: keyof Tables
): Insert<T> {
  return async t => {
    db[table].push(t);

    return Promise.resolve(t);
  };
}
