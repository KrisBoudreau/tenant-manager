import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String, 
    user_id: String
})

var User = mongoose.model('User', UserSchema);

export default User;