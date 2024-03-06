export interface SignUpInterface {
  name: string;
  lastname: string;
  nick: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface UserToken {
  artisticName: string;
  email: string;
  id: string;
  name: string;
  status: string;
  token: string;
}
