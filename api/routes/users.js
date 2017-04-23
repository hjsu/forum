import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import User from '../../models/user';
import { sendWithError, errorTypes } from '../util/errors';

export const login = (req, res, next) => {
  let user;
  User.where({'user_name': req.body.userName}).fetch()
    .then(u => {
      user = u;
      return bcrypt.compare(req.body.password, user.get('password'));
    }) 
    .then(isValid => {
      if (isValid === true) {
        res.send({
          token: jwt.sign(user.get('email'), process.env.WEBTOKEN_SECRET)
        });
      } else {
        sendWithError(req, res, errorTypes.LOGIN, 400, 'Invalid password');
      }
    })
    .catch((e) => {
      sendWithError(req, res, errorTypes.LOGIN, 400, 'Invalid login details');
    });
}
