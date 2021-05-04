import type { Either } from "..";

export interface User {
  id: string;
  name: string;
}

export interface NewUser {
  name: string;
}

export class UserNameError extends Error {}

export type UserBuilder = (nu: NewUser) => User;
export type UserValidator = (nu: NewUser) => Either<NewUser, UserNameError>;
