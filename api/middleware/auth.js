import * as jwt from 'jsonwebtoken';
import { sendWithError, errorTypes } from '../util/errors';
import User from '../../models/user';

export const auth = (req, res, next) => {
  try {
    const token = req.header('X-Access-Token');
    const decoded = jwt.verify(token, process.env.WEBTOKEN_SECRET);

    User.where({'email': decoded})
      .then(u => {
        req.user = u;
        next()
      })
  }

  catch(err) {
    sendWithError(req, res, errorTypes.INVALID_TOKEN, 400)
  }

}
