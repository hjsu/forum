import { Router } from 'express';

const byId = async(req, res, next) => {
  const opts = {columns: ['id', 'forum_id', 'title', 'author_id']};
  const topicData = await req.db.topics.findOne(parseInt(req.params.id), opts);

  const posts = await req.db.query(
    'select u.display_name as author, u.id as user_id, p.body, p.id as p_id ' +
    'from posts p inner join users u ' +
    'on p.user_id = u.id where p.topic_id=$1 order by p_id asc', [topicData.id]
  );

  res.send({...topicData, posts});
}

const router = Router();
router.get('/:id', byId);

export default router;
