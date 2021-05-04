import type { Mailer } from "../../src/application/mailer";

type Outbox = string[];

export function createOutbox(): Outbox {
  return [];
}

export function mailer(outbox: Outbox): Mailer {
  return async msg => {
    outbox.push(msg);

    return Promise.resolve();
  };
}
