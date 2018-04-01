const jwt = require('jsonwebtoken');

let counter = 0;

function getUserId(ctx) {
  counter++;
  const Authorization = ctx.request.get('Authorization');
  const token = Authorization.replace('Bearer ', '');

  if (Authorization && token !==null) {
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      return userId;
    } catch(err) {
      throw new AuthError();
    }
  }

  throw new AuthError()
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUserId,
  AuthError
}
