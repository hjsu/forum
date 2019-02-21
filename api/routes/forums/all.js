export default async(req, res, next) => {
  const opts = {columns: ['id', 'name', 'parent_forum', 'description']};
  const forumData = await req.db.forums.findOne(parseInt(req.params.id), opts);

  const topics = await req.db.query(
    'select t.id as id, t.title, t.author_id, u.display_name as author ' +
    'from topics t inner join users u ' +
    'on t.author_id = u.id where t.forum_id=$1', [forumData.id]
  );

  res.send({...forumData, topics});
}
