import type { CreateUserHttpAdapter } from ".";
import type { CreateUserUseCase } from "../../application/users";
import { UserNameError } from "../../domain/users";

export function createUserHttpAdapter(
  useCase: CreateUserUseCase
): CreateUserHttpAdapter {
  return async nu => {
    const e = await useCase(nu);

    if (e instanceof UserNameError) {
      return {
        status: 400,
        body: { error: e.message },
      };
    }

    return {
      status: 200,
      body: e,
    };
  };
}
