import { createUserUseCase } from "../../application/users/impl";
import type { User } from "../../domain/users";
import { userBuilder, userValidator } from "../../domain/users/impl";
import { insert } from "../../infrastructure/db";
import { knex } from "../../infrastructure/db/knex";
import { mailer } from "../../infrastructure/mailer";
import { createUserHttpAdapter } from "../../presentation/users/impl";
import type { Controller } from "../controller";
import { controller } from "../controller";
import { joiNewUser } from "./joi";

export function createUserController(): Controller {
  const adapter = createUserHttpAdapter(
    createUserUseCase(
      userValidator(),
      userBuilder(),
      insert<User>(knex(), "users"),
      mailer()
    )
  );

  return controller(joiNewUser, adapter);
}
