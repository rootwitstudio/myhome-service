import { Router } from 'express';
import * as QueryController from './controller';

const routes = new Router();

routes.get('/queries', QueryController.getAllQueries);


export default routes;
