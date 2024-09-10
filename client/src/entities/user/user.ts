enum Role {
  ADMIN = 'admin', // 001
  USER = 'user', //010
  GUEST = 'guest', //100
}

abstract class UserA {
  abstract get role(): string;
}

interface UserI {
  id: string;
  name: string;
  role: string;
}

class User extends UserA {
  #role: string = Role.GUEST;
  constructor(data: UserI) {
    super();
    const { role, ...rest } = data;
    this.#role = role;
    console.log(this.#role);
    Object.assign(this, rest);
  }
  get role() {
    return this.#role;
  }
}

export { User, type UserI };
