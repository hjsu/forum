import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import semver from 'semver';
import versioner from './middleware/versioner';
import categories from './routes/categories';
import routes from './routes';
const massive = require('massive');

massive({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
}, {scripts: './db/massive_scripts'}).then(instance => {

  const app = express();
  const port = process.env.API_PORT;
  
  app.use(bodyParser.json());
  app.use(cors());
  app.use(versioner);
  app.use((req, res, next) => {req.db = instance; next()});

  app.use(routes);
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
