import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    profileImgUrl: {type: String, required: false},
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
