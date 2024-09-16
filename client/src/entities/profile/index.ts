import { Role } from '../interface';

class Profile {
  #role: string = Role.GUEST;
  constructor(data: any) {
    const { role, ...rest } = data;
    this.#role = role;
    console.log(this.#role);
    Object.assign(this, rest);
  }

  get role() {
    return this.#role;
  }
}

const ProfileI = typeof Profile;

export { Profile, type ProfileI };
