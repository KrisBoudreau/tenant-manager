import express from 'express';

import { getBuildings, createBuilding, deleteBuilding } from '../controllers/Buildings.js';

const router = express.Router();

router.get('/', getBuildings);
router.post('/', createBuilding);
router.delete('/:id', deleteBuilding);


export default router;