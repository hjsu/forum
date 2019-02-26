export enum Error {
  LOGIN = 'login',
  INVALID_TOKEN = 'invalid token'
}

export interface ErrorResponse {
  error: {
    type: Error,
    message: string
  }
}
