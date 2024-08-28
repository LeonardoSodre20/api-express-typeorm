import { Request, Response } from "express";
import { CreateUser } from "../../use-cases/create-user";
import { User } from "../../domain/entities/user.entity";
import { FindAllUsers } from "../../use-cases/find-all-users";
import { FindUserById } from "../../use-cases/find-user-by-id";


class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly findAllUsers: FindAllUsers,
    private readonly findUserById: FindUserById
  ) { }

  async create(request: Request, response: Response) {
    try {
      const data = request.body as User

      const user = await this.createUser.execute(data)

      return response.status(201).json({ user, message: 'Usuário criado com sucesso!' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao criar o usuário!' })
    }
  }

  async findAndCountAll(request: Request, response: Response) {
    try {
      const users = await this.findAllUsers.execute()

      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao listar os usuários!' })
    }
  }

  async findByID(request: Request, response: Response) {
    try {
      const { id } = request.params

      if (!id) {
        throw new Error('ID not found!')
      }

      const user = await this.findUserById.execute(+id)

      return response.status(200).json({ message: "Usuário encontrado com sucesso!", user })

    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar o usuário por ID!' })
    }
  }
}

export {
  UserController
}