import { Application } from "express"

class App {
  constructor(private port: number, private app: Application) {
    this.port = port
    this.app = app
  }

  initialize() {
    if (!this.port) {
      throw new Error('Port not found')
    }
    return this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`))
  }
}

export {
  App
}