import { User } from "../entities/user.entity";

export interface UserRepository {
  create: (data: User) => Promise<User>
  findAndCountAll: () => Promise<{
    users: User[];
    total: number;
  }[]>
  findByID: (id: number) => Promise<User | null>
}