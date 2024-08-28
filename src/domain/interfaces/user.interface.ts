import { User } from "../entities/user.entity";

export interface UserRepository {
    create: (data: User) => Promise<User>
}