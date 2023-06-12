import express from 'express';
import mongoose from 'mongoose';


import Opening from '../models/opening.js';

const router = express.Router();



export const getOpenings = async (req, res) => { 
    try {
        const Openings = await Opening.find();    
        res.status(200).json(Openings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createOpening = async (req, res) => { 
    const { title, creator, notes } = req.body;   
    const newOpening = new Opening({ title, creator, notes });
    try {
        await newOpening.save();
        res.status(201).json(newOpening);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

