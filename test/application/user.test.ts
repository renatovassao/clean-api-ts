import { createUserUseCase } from "../../src/application/users/impl";
import { UserNameError } from "../../src/domain/users";
import { userBuilder, userValidator } from "../../src/domain/users/impl";
import { badNewUser, newUser } from "../domain/user";
import { createDb, insert } from "./db";
import { mailer, createOutbox } from "./mailer";

export function createUserUseCaseScoped() {
  const db = createDb();
  const outbox = createOutbox();

  return [
    db,
    outbox,
    createUserUseCase(
      userValidator(),
      userBuilder(),
      insert(db, "users"),
      mailer(outbox)
    ),
  ] as const;
}

test("create user test", async () => {
  const [db, outbox, useCase] = createUserUseCaseScoped();

  const nu = newUser();

  expect(await useCase(nu)).not.toBeInstanceOf(UserNameError);
  expect(db.users.find(x => x.name === nu.name)).not.toBeUndefined();
  expect(outbox.length).toBeGreaterThan(0);
});

test("create user bad test", async () => {
  const [db, outbox, useCase] = createUserUseCaseScoped();

  const nu = badNewUser();

  expect(await useCase(nu)).toBeInstanceOf(UserNameError);
  expect(db.users.find(x => x.name === nu.name)).toBeUndefined();
  expect(outbox.length).toBe(0);
});
