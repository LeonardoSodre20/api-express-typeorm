import { Request, Response } from "express";
import { CreateUser } from "../../use-cases/create-user";
import { User } from "../../domain/entities/user.entity";

class UserController {
  constructor(private readonly createUser: CreateUser) { }

  async create(request: Request, response: Response) {
    const data = request.body as User
    const user = await this.createUser.execute(data)
    return response.status(201).json({ user, message: 'Usuário criado com sucesso!' })
  }
}

export {
  UserController
}