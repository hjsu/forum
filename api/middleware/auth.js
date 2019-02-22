import * as jwt from 'jsonwebtoken';
import { sendWithError, errorTypes } from '../util/errors';

export default async(req, res, next) => {
  try {
    const token = req.header('X-Access-Token');
    const decoded = jwt.verify(token, process.env.WEBTOKEN_SECRET);

    req.user = await req.db.findOne({email: decoded});
    next();
  }

  catch(err) {
    sendWithError(req, res, errorTypes.INVALID_TOKEN, 400)
  }

}
