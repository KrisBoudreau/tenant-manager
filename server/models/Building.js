import mongoose from 'mongoose';

const BuildingSchema = mongoose.Schema({
    name: String,
    creator: String,
    notes: String
})

var Building = mongoose.model('Building', BuildingSchema);

export default Building;