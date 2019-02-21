import { Router } from 'express';
import all from './all';

const router = Router();
router.get('/all', all);

export default all;
