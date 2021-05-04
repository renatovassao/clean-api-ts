import type { Either } from "../../domain";
import type { NewUser, User, UserNameError } from "../../domain/users";

export type CreateUserUseCase = (
  nu: NewUser
) => Promise<Either<User, UserNameError>>;
