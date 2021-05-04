import faker from "faker";

import type { NewUser } from "../../src/domain/users";

export function newUser(): NewUser {
  return {
    name: faker.datatype.string(faker.datatype.number(10)),
  };
}

export function badNewUser(): NewUser {
  return {
    name: faker.datatype.string(faker.datatype.number({ min: 11 })),
  };
}
