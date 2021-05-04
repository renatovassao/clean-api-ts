import { v4 } from "uuid";

import type { UserBuilder, UserValidator } from ".";
import { UserNameError } from ".";

export function userBuilder(): UserBuilder {
  return nu => ({
    id: v4(),
    name: nu.name,
  });
}

export function userValidator(): UserValidator {
  return u => {
    if (u.name.length > 10) {
      return new UserNameError("name too long");
    }

    return u;
  };
}
