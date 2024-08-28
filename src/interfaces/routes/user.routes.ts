
import { Router } from "express";

import { CreateUser } from "../../use-cases/create-user";

import { UserController } from "../controllers/user-controller";
import { InMemoryUserRepository } from "../../infrastructure/repositories/in-memory-user-repository";
import { FindAllUsers } from "../../use-cases/find-all-users";
import { FindUserById } from "../../use-cases/find-user-by-id";

const router = Router()

const userRepository = new InMemoryUserRepository()
const createUser = new CreateUser(userRepository)
const findUsers = new FindAllUsers(userRepository)
const findUser = new FindUserById(userRepository)
const userController = new UserController(createUser, findUsers, findUser)

router.post('/users', (req, res) => userController.create(req, res))
router.get('/users', (req, res) => userController.findAndCountAll(req, res))
router.get('/users/:id', (req, res) => userController.findByID(req, res))

export {
  router as userRoutes
}