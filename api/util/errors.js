export const errorTypes = {
  LOGIN: 'login',
  INVALID_TOKEN: 'invalid token'
}

export const sendWithError = (req, res, type, code, message='') => {
  res.statusCode = code;
  res.send({error: {type, message}})
}
