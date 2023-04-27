export interface IUser extends IAuth {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface IAuth {
  username: string;
  password?: string;
}
