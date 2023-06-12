import express from 'express';

import { getOpenings, createOpening } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getOpenings);
router.post('/', createOpening);


export default router;