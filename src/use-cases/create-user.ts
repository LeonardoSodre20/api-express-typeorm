import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/interfaces/user.interface";

class CreateUser {
  constructor(private userRepository: UserRepository) { }

  async execute(data: User): Promise<User> {
    return this.userRepository.create(data)
  }
}

export {
  CreateUser
}