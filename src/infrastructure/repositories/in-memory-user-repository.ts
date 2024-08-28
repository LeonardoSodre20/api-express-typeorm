import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/interfaces/user.interface";


class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async create(data: User): Promise<User> {
    this.users.push(data)
    return data
  }
}

export {
  InMemoryUserRepository
}