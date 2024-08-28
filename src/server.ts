import { App } from "./app";
import express from 'express'
import { userRoutes } from "./interfaces/routes/user.routes";

const port = Number(process.env.PORT)

const application = new App(port, express(), userRoutes)

application.initialize()