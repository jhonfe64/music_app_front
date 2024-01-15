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
