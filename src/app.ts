import { Application, json, Router } from "express"
class App {
  constructor(private port: number, private app: Application, private router: Router) {
    this.port = port
    this.app = app
    this.router
  }

  initialize() {
    if (!this.port) {
      throw new Error('Port not found')
    }

    this.app.use(json())

    this.app.use('/', this.router)

    return this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`))
  }
}

export {
  App
}