import express from 'express';
import {UserRoutes, NoticeRoutes, BlockRoutes, FlatRoutes, QueryRoutes, AuthRoutes} from './modules';
import middlewaresConfig from './config/middlewares';

const app = express();
middlewaresConfig(app);

app.use('/api', [UserRoutes, NoticeRoutes, BlockRoutes, FlatRoutes, QueryRoutes, AuthRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(`👽Houston we have a problem : ${err} ☠️`);
  }
  {
    console.log(`🎉 APP Listen to port: ${PORT} 🎉`);
  }
});
