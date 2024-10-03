export interface IUser {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
  imageUrl: string;
}

export interface IUserMutation {
  name: string;
  email: string;
  active: boolean;
  role: string;
}
