import type { HttpAdapter } from "..";
import type { NewUser } from "../../domain/users";

export type CreateUserHttpAdapter = HttpAdapter<NewUser>;
