import type { CreateUserUseCase } from ".";
import type { User, UserBuilder, UserValidator } from "../../domain/users";
import { UserNameError } from "../../domain/users";
import type { Insert } from "../db";
import type { Mailer } from "../mailer";

export function createUserUseCase(
  validator: UserValidator,
  builder: UserBuilder,
  insert: Insert<User>,
  mailer: Mailer
): CreateUserUseCase {
  return async nu => {
    const e = validator(nu);

    if (e instanceof UserNameError) {
      return e;
    }

    const u = await insert(builder(e));

    await mailer(`user ${u.name} created`);

    return u;
  };
}
