import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      name: "Fauzan Nursalma",
      email: "fauzann@gmail.com",
      password: "123456",
      address: "Bandung",
      phone: "081818181818",
    },
    {
      name: "Robert Downey Jr",
      email: "robertdowneyjr@gmail.com",
      password: "abcdef",
      address: "Los Angeles",
      phone: "1234567890",
    },
    {
      name: "Johnny Depp",
      email: "johnnydepp@gmail.com",
      password: "xyz123",
      address: "Hollywood",
      phone: "0987654321",
    },
  ]);
}
