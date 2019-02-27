import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, Error } from '../interfaces/error_responses';

export const sendWithError = 
  (req: Request, res: Response, type: Error, code, message='') => {
  res.statusCode = code;
  res.send({error: {type, message}}: ErrorResponse)
}
