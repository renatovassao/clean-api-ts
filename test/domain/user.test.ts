import { UserNameError } from "../../src/domain/users";
import { userValidator } from "../../src/domain/users/impl";
import { badNewUser, newUser } from "./user";

const validator = userValidator();

test("new user validation", () => {
  const nu = newUser();

  expect(validator(nu)).not.toBeInstanceOf(UserNameError);
});

test("new user bad validation", () => {
  const nu = badNewUser();

  expect(validator(nu)).toBeInstanceOf(UserNameError);
});
