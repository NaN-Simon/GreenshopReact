export interface IRegisterData {
  username: string
  email: string
  password: string
}

export type RegisterDataWithConfirmation = IRegisterData & {
  passwordConfirmation?: string
}

export interface ILoginData {
  email: string
  password: string
}
