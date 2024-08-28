
import { Router } from "express";

import { CreateUser } from "../../use-cases/create-user";

import { UserController } from "../controllers/user-controller";
import { InMemoryUserRepository } from "../../infrastructure/repositories/in-memory-user-repository";

const router = Router()

const userRepository = new InMemoryUserRepository()
const createUser = new CreateUser(userRepository)
const userController = new UserController(createUser)

router.post('/users', (req, res) => userController.create(req, res))

export {
  router as userRoutes
}