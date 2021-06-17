import { Router } from 'express';
import * as FlatController from './controller';

const routes = new Router();

routes.get('/flats', FlatController.getAllFlats);


export default routes;
