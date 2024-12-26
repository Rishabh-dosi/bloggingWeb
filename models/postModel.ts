import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requried: true
    },
},
    { timestamps: true })

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
