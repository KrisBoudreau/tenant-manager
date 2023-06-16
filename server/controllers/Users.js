import express from 'express';
import mongoose from 'mongoose';

import User from '../models/User.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const Users = await User.find();    
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    try {
        const Userwid = await User.find( {email: req.params.id} );   
        res.status(200).json(Userwid);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => { 
    const { name, email, role } = req.body;   
    const newUser = new User({ name, email, role });
    try {
        await newUser.save();
        res.status(201).json(User);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => { 
    const { name, role, email } = req.body;   
    const updatedUser = await User.findOne({email: email});
    try {
        updatedUser.overwrite({name: name, role: role})
        await updatedUser.save();
        res.status(201).json(User);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}