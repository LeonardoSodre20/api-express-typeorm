import { UserRepository } from "../domain/interfaces/user.interface";


class FindUserById {
  constructor(private userRepository: UserRepository) { }

  async execute(id: number) {
    return await this.userRepository.findByID(id)
  }
}

export {
  FindUserById
}