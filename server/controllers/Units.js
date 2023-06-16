import express from 'express';
import mongoose from 'mongoose';

import Unit from '../models/Unit.js';

const router = express.Router();

export const getUnits = async (req, res) => { 
    try {
        const Units = await Unit.find( {buildingName: req.params.buildingName} );    
        res.status(200).json(Units);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUnit = async (req, res) => { 
    const { buildingName, creator, tenantName, unitNumber } = req.body;   
    const newUnit = new Unit({ buildingName, creator, tenantName, unitNumber });
    try {
        await newUnit.save();
        res.status(201).json(newUnit);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}