import semver from 'semver';

export default (req, res, next) => {
  const pieces = req.url.replace(/^\/+/, '').split('/');
  const origVersion = pieces[1];
  const origUrl = req.url;
  try {

    let version = origVersion;

    // /api/v1/resource
    // /api/v1.0/resource
    // /api/v1.0.0/resource
    if (!semver.valid(version)) {
      version = version.replace(/v(\d{1})\.(\d{1})\.(\d{1})/, '$1.$2.$3');
      version = version.replace(/v(\d{1})\.(\d{1})/, '$1.$2.0');
      version = version.replace(/v(\d{1})/, '$1.0.0');
    }
    

    if (semver.valid(version)) {
      req.url = req.url.replace('api/' + origVersion + '/', '');
      req.headers['accept-version'] = version;
    }
  }
  
  catch(e) {
    req.url = origUrl;
  }

  next();
};
