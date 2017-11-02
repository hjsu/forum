export const listPosts = (req, res, next) => {
  // Topic.where({id: parseInt(req.params.id)}).fetch({withRelated: 'posts.user'})
  //   .then(topic => {
  //     const posts = topic.related('posts').map(post => {
  //       return {
  //         author: post.related('user').get('name'),
  //         author_id: post.related('user').get('id'),
  //         body: post.get('body'),
  //         id: post.get('id')
  //       }
  //     });
  //     res.send({
  //       id: topic.get('id'),
  //       forumId: topic.get('forum_id'),
  //       authorId: topic.get('user_id'),
  //       title: topic.get('title'),
  //       posts
  //     });
  //   });
}
