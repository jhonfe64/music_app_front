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

// export interface UserSession {
//   user: {
//     status: string;
//     id: string;
//     name: string;
//     artisticName: string;
//     email: string;
//     token: string;
//   }
//   expires: string
// }

//https://reacthustle.com/blog/extend-user-session-nextauth-typescript
//https://chat.openai.com/c/336fdc80-25f5-48ca-94c5-dec73ec69335

export interface UserSessionInterface {
  user: {
    name: string;
    email: string;
    image?: undefined | string;
    status: string;
    id: string;
    artisticName: string;
    token: string;
  };
  expires: string;
}

// user: {
//   name: 'Maria Del Rio',
//   email: 'jhonfe649@gmail.com',
//   image: undefined,
//   status: 'success',
//   id: '65a73ead3ff563b728062c5d',
//   artisticName: 'Johny D',
//   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1YTczZWFkM2ZmNTYzYjcyODA2MmM1ZCIsIm5hbWUiOiJNYXJpYSBEZWwgUmlvIiwiZW1haWwiOiJqaG9uZmU2NDlAZ21haWwuY29tIiwicm9sIjoiYXJ0aXN0IiwiaW1hZ2UiOiJkZWZhdWx0LnBuZyJ9.pdSVNpTaekPGxuYe-cceEBHNzslZ_loHyyH7WfriWoI'
// },
// expires: '2024-03-22T04:35:20.569Z'
// }
