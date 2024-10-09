import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import UserController from './app/controllers/UserController';
import OrderController from './app/controllers/OrderController';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/users', UserController.store); // Cadastro

routes.post('/sessions', SessionController.store); // Login

routes.post('/products', upload.single('file'), ProductController.store);
routes.put('/products/:id', upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);
routes.get('/products', ProductController.index);

routes.get('/categories', CategoryController.index);

routes.use(authMiddleware); // será chamado por todas as rotas ABAIXO

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);

export default routes;
