

class User {
  constructor(
    public readonly id: number,
    private name: string,
    private email: string
  ) {
    this.id = id ?? 1
  }
}

export {
  User
}