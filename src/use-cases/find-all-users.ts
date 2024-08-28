import { UserRepository } from "../domain/interfaces/user.interface";


class FindAllUsers {
  constructor(private userRepository: UserRepository) { }

  async execute() {
    return await this.userRepository.findAndCountAll()
  }
}

export {
  FindAllUsers
}