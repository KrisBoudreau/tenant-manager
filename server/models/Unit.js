import mongoose from 'mongoose';

const UnitSchema = mongoose.Schema({
    buildingName: String,
    unitNumber: String,
    tenantName: String,
    creator: String,
})

var Unit = mongoose.model('Unit', UnitSchema);

export default Unit;