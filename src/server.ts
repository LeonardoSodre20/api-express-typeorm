import { App } from "./app";
import express from 'express'

const port = Number(process.env.PORT)

const application = new App(port, express())

application.initialize()