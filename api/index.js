import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import semver from 'semver';
import { login } from './routes/users';
import { auth } from './middleware/auth';
import versioner from './middleware/versioner';
import { getAllCategories } from './routes/categories';
import { listTopics } from './routes/forums';
import { listPosts } from './routes/topics';
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

  app.get({path: '/', version: '0.0.1'}, (req, res) => res.send({}));
  app.post('/users/auth', login);
  app.get('/categories', getAllCategories);
  app.get('/forums/:id', listTopics);
  app.get('/topics/:id', listPosts);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
