import { UserModel } from "../db/models/users";

export class UserRepository {
  async getUserById(id: string) {
    return UserModel.query().findById(id);
  }

  async getUserByEmail(email: string) {
    return UserModel.query().findOne({ email });
  }

  async getAllUsers() {
    return UserModel.query();
  }

  async createUser(user: any) {
    return UserModel.query().insert(user);
  }

  async updateUser(id: string, user: any) {
    return UserModel.query().findById(id).patch(user);
  }

  async deleteUser(id: string) {
    return UserModel.query().deleteById(id);
  }
}

export const userRepository = new UserRepository();
