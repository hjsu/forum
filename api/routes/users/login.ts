import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { sendWithError } from '../../util/errors';
import { Error } from '../../interfaces/error_responses';

export default async(req : Request, res : Response, next : NextFunction) => {
  const user = await req.db.findOne({user_name: req.body.userName});
  if (!user) {
    sendWithError(req, res, Error.LOGIN, 400, 'Invalid login details');
    return;
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    sendWithError(req, res, Error.LOGIN, 400, 'Invalid password');
    return;
  }
  
  res.send({
    token: jwt.sign(user.get('email'), process.env.WEBTOKEN_SECRET)
  });
}
