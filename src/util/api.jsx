import * as request from 'superagent';

const url = window.apiUrl;

export const api = {
  categoryList() {
    return new Promise((resolve, reject) => {
      request
        .get(url + '/categories')
        .set('Accept', 'application/json')
        .end( (err, res) => {
          err ? reject(err) : resolve(res.body);
        });
    });
  },

  forumTopics(id) {
    return new Promise((resolve, reject) => {
      request
        .get(url + '/forums/' + id)
        .set('Accept', 'application/json')
        .end( (err, res) => {
          err ? reject(err) : resolve(res.body);
        });
    });
  },

  topicPosts(id) {
    return new Promise((resolve, reject) => {
      request
        .get(url + '/topics/' + id)
        .set('Accept', 'application/json')
        .end( (err, res) => {
          err ? reject(err) : resolve(res.body);
        });
    });
  }
}
