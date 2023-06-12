import express from 'express';

import { getBuildings, createBuilding } from '../controllers/Buildings.js';

const router = express.Router();

router.get('/', getBuildings);
router.post('/', createBuilding);


export default router;