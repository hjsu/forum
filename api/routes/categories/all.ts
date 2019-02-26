import { Request, Response, NextFunction } from 'express';

export default async(req : Request, res : Response, next : NextFunction) => {
  const data = await req.db.query(
    'select c.id as c_id, c.name as c_name, c.description as c_desc, f.id as f_id, f.name as f_name, ' +
    'f.description as f_desc, f.parent_forum as f_pf ' + 
    'from categories c inner join forums f ' + 
    'on c.id = f.category_id', [], {
      decompose: {
        pk: 'c_id',
        columns: {c_name: 'name', c_desc: 'description'},
        forums: { 
          pk: 'f_id', 
          array: true, 
          columns: {f_id: 'id', f_name: 'name', f_desc: 'description', f_pf: 'parent_forum'} 
        }
      }
    }
  );
  res.send(data);
}
