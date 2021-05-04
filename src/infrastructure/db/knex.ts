import type { Knex } from "knex";
import knx from "knex";

import type { User } from "../../domain/users";
import { config } from "./knexfile";

declare module "knex/types/tables" {
  interface Tables {
    users: User;
  }
}

export function knex(): Knex {
  return knx(config);
}
