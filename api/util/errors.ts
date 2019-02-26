import { Request, Response, NextFunction } from 'express';
export const errorTypes = {
  LOGIN: 'login',
  INVALID_TOKEN: 'invalid token'
}

export const sendWithError = 
  (req: Request, res: Response, type, code, message='') => {
  res.statusCode = code;
  res.send({error: {type, message}})
}
