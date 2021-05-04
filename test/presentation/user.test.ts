import { createUserHttpAdapter } from "../../src/presentation/users/impl";
import { createUserUseCaseScoped } from "../application/user.test";
import { badNewUser, newUser } from "../domain/user";

test("create user http adapter test", async () => {
  const [, , useCase] = createUserUseCaseScoped();
  const adapter = createUserHttpAdapter(useCase);
  const nu = newUser();

  const res = await adapter(nu);

  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty("id");
  expect(res.body).toHaveProperty("name");
});

test("create user bad http adapter test", async () => {
  const [, , useCase] = createUserUseCaseScoped();
  const adapter = createUserHttpAdapter(useCase);
  const nu = badNewUser();

  const res = await adapter(nu);

  expect(res.status).toBe(400);
  expect(res.body).toHaveProperty("error");
});
