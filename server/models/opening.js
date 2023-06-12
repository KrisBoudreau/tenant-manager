
import mongoose from 'mongoose';

const openingSchema = mongoose.Schema({
    title: String,
    creator: String,
    notes: String
})

var Opening = mongoose.model('Opening', openingSchema);

export default Opening;