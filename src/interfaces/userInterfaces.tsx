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

export interface UserSession {
  status: string;
  id: string;
  name: string;
  artisticName: string;
  email: string;
  token: string;
}


//https://reacthustle.com/blog/extend-user-session-nextauth-typescript
//https://chat.openai.com/c/336fdc80-25f5-48ca-94c5-dec73ec69335
