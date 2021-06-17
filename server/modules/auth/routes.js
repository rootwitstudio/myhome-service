import { Router } from 'express';
import * as AuthController from './controller';

const routes = new Router();

routes.post('/login', AuthController.login);


export default routes;
