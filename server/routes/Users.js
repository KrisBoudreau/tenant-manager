import express from 'express';

import { getUsers, createUser, getUser, updateUser } from '../controllers/Users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/', updateUser);


export default router;