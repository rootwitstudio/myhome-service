import { Router } from 'express';
import * as BlockController from './controller';
import {authenticateToken} from '../../config/authVerify'
const routes = new Router();

routes.get('/blocks',authenticateToken,BlockController.getAllBlocks);


export default routes;
