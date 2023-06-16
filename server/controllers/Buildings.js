import express from 'express';
import mongoose from 'mongoose';


import Building from '../models/Building.js';

const router = express.Router();



export const getBuildings = async (req, res) => { 
    try {
        const Buildings = await Building.find();    
        res.status(200).json(Buildings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBuilding = async (req, res) => { 
    const { name, creator, notes } = req.body;   
    const newBuilding = new Building({ name, creator, notes });
    try {
        await newBuilding.save();
        res.status(201).json(Building);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteBuilding = async (req, res) => { 
    try {
        const { id } = req.params;
        await Building.deleteOne( {_id: id} );    
        res.status(200);
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}