

class User {
  constructor(
    private readonly id: number,
    private name: string,
    private email: string
  ) {
    this.id = id ?? 1
  }
}

export {
  User
}