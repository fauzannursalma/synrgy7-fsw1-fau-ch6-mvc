import { UserRepository } from "../repositories/userRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async createUser(user: any) {
    return this.userRepository.createUser(user);
  }

  async updateUser(id: string, user: any) {
    return this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }
}

export const userService = new UserService();
