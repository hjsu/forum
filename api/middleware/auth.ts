import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { sendWithError } from '../util/errors';
import { Error } from '../interfaces/error_responses';

export default async(req : Request, res : Response, next : NextFunction) => {
  try {
    const token = req.header('X-Access-Token');
    const decoded = jwt.verify(token, process.env.WEBTOKEN_SECRET);

    req.user = await req.db.findOne({email: decoded});
    next();
  }

  catch(err) {
    sendWithError(req, res, Error.INVALID_TOKEN, 400)
  }

}
