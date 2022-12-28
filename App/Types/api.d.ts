interface ILoginUserRequest {
  email: string;
  password: string;
}

interface IRegisterUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
