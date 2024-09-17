import { Role } from '../interface';
import { ProfileI } from './interface';

class Profile {
  #role: string = Role.GUEST;
  constructor(data: ProfileI) {
    const { role, ...rest } = data;
    this.#role = role;
    Object.assign(this, rest);
  }

  get role() {
    return this.#role;
  }
}

export { Profile };
