import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/interfaces/user.interface";


class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async create(data: User): Promise<User> {
    this.users.push(data)
    return data
  }

  async findAndCountAll() {
    const users = [{ users: this.users, total: this.users.length }]
    return users
  }

  async findByID(id: number): Promise<User | null> {
    const user = this.users.find(user => user.id === id)
    return user ?? null
  }
}

export {
  InMemoryUserRepository
}