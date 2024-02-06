export interface SigninUserModel {
  username: string;
  email: string;
  password: string;
}

export interface loginUserModel {
  email: string;
  password: string;
}

export interface newContactModel {
  name: string;
  email: string;
  phone: string;
}

export interface contactModel {
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  updatedAt: string;
  user_id: string;
  __v: number;
  _id: string;
}
