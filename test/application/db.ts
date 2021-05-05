import type { Insert } from "../../src/application/db";
import type { User } from "../../src/domain/users";

interface Db {
  users: User[];
}

export function createDb(): Db {
  return {
    users: [],
  };
}

export function insert<T extends Db[keyof Db][0]>(
  db: Db,
  table: keyof Db
): Insert<T> {
  return async t => {
    db[table].push(t);

    return Promise.resolve(t);
  };
}
