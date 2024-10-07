import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (request, response, next) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authToken.split(' ');

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: 'Token is invalid' });
    }

    // Decodifica o token e atribui valores à requisição
    request.userId = decoded.id;
    request.userName = decoded.name;

    // Continua para o próximo middleware
    return next();
  });
};
