export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
