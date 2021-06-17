import { Router } from 'express';
import * as NoticeController from './controller';

const routes = new Router();

routes.get('/notice', NoticeController.getAllNotice);


export default routes;
