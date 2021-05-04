import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { name: "renato" },
    { name: "michel" },
    { name: "leal" },
    { name: "gutchenzo" },
  ]);
}
