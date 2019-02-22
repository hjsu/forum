import { Router } from 'express';

// TODO: dynamic imports
import categories from './categories';
import forums from './forums';
import topics from './topics';
import users from './users';

const router = Router();
router.use('/categories', categories);
router.use('/forums', forums);
router.use('/topics', topics);
router.use('/users', users);


export default router;
