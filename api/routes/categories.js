const Category = {

}

export const getAllCategories = (req, res, next) => {
  Category.fetchAll({withRelated: 'forums'})
    .then(cats => {
      const data = cats.models.map(cat => {
        return {
         id: cat.get('id'),
         name: cat.get('name'),
         description: cat.get('description'),
         forums: cat.related('forums').map(forum => {
          return {
            id: forum.get('id'),
            name: forum.get('name'),
            description: forum.get('description'),
            parent_forum: forum.get('parent_forum')
          }
         })
        }
      });
      res.send(data);
    });
}
