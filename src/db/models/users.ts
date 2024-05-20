import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  name!: string;
  email!: string;
  password!: string;
  address!: string;
  phone!: string;

  static get tableName() {
    return "users";
  }
}

export type Users = ModelObject<UserModel>;
