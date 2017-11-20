import restify from 'restify';
import semver from 'semver';
import { login } from './routes/users';
import { auth } from './middleware/auth';
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
  var server = restify.createServer({
    name: 'Forum API',
    versions: ['0.0.1']
  })

  server.use(restify.bodyParser());
  server.use(restify.CORS());

  function respond(req, res, next) {
    res.send({});
  }

  // Restify doesn't natively support url versioning
  // http://stackoverflow.com/questions/21365693/restify-api-version-in-url/29706259
  server.pre(function (req, res, next) {
      var pieces = req.url.replace(/^\/+/, '').split('/');
      var version = pieces[0];

      // only if you want to use this routes:
      // /api/v1/resource
      // /api/v1.0/resource
      // /api/v1.0.0/resource
      if (!semver.valid(version)) {
          version = version.replace(/v(\d{1})\.(\d{1})\.(\d{1})/, '$1.$2.$3');
          version = version.replace(/v(\d{1})\.(\d{1})/, '$1.$2.0');
          version = version.replace(/v(\d{1})/, '$1.0.0');
      }

      if (semver.valid(version) && server.versions.indexOf(version) > -1) {
          req.url = req.url.replace(version + '/', '');
          req.headers['accept-version'] = version;
      }

      req.db = instance;
      return next();
  });

  server.get({path: '/', version: '0.0.1'}, respond);
  server.post('/users/auth', login);
  server.get('/categories', getAllCategories);
  server.get('/forums/:id', listTopics);
  server.get('/topics/:id', listPosts);

  server.listen(process.env.API_PORT || 8080, () =>  {
    console.log('%s listening at %s', server.name, server.url);
  });
});
