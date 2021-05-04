import type { Mailer } from "../application/mailer";

export function mailer(): Mailer {
  return async msg => Promise.resolve(console.log(msg));
}
