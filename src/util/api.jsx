import * as request from 'superagent';

const url = window.apiUrl;

const handleAPIResponse = (err, res, resolve, reject) => {
  if (err) {
    reject(err);
    return;
  }

  if (res.errors) {
    reject(res.errors);
    return;
  }

  resolve(res.body.data);
}

export const api = {
  graphql(schema) {
    return new Promise((resolve, reject) => {
      request
        .get(url +`/graphql?query=\{${schema}\}`)
        .set('Accept', 'application/json')
        .end( (err, res) => handleAPIResponse(err, res, resolve, reject))
    });
  }
}
