import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { sendWithError, errorTypes } from '../../util/errors';

export const login = async(req, res, next) => {
  const user = await req.db.findOne({user_name: req.body.userName});
  if (!user) {
    sendWithError(req, res, errorTypes.LOGIN, 400, 'Invalid login details');
    return;
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    sendWithError(req, res, errorTypes.LOGIN, 400, 'Invalid password');
    return;
  }
  
  res.send({
    token: jwt.sign(user.get('email'), process.env.WEBTOKEN_SECRET)
  });
}
