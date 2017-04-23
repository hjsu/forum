import Forum from '../../models/forum';

export const listTopics = (req, res, next) => {
  Forum.where({id: parseInt(req.params.id)}).fetch({withRelated: 'topics.user'})
    .then(forum => {
      const topics = forum.related('topics').map(topic => {
        return {
          author: topic.related('user').get('name'),
          authorId: topic.related('user').get('id'),
          title: topic.get('title'),
          id: topic.get('id')
        }
      });
      res.send({
        parentForum: forum.get('parent_forum'),
        name: forum.get('name'),
        description: forum.get('description'),
        topics
      })
    });
}
