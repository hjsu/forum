import { NextFunction, Request, Response, Router } from 'express';

const byId = async(req : Request, res : Response, next : NextFunction) => {
  const opts = {columns: ['id', 'name', 'parent_forum_id', 'description']};
  const forumData = await req.db.forums.findOne(parseInt(req.params.id), opts);

  const topics = await req.db.query(
    'select t.id as id, t.title, t.author_id, u.display_name as author ' +
    'from topics t inner join users u ' +
    'on t.author_id = u.id where t.forum_id=$1', [forumData.id]
  );

  res.send({...forumData, topics});
}

const router = Router();
router.get('/:id', byId);

export default router;
