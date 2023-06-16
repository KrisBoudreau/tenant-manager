import express from 'express';

import { getUnits, createUnit } from '../controllers/Units.js';

const router = express.Router();

router.get('/:buildingName', getUnits);
router.post('/', createUnit);


export default router;