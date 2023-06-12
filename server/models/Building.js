import mongoose from 'mongoose';

const BuildingSchema = mongoose.Schema({
    title: String,
    creator: String,
    notes: String
})

var Building = mongoose.model('Building', BuildingSchema);

export default Building;