import mongoose from "mongoose";



const videoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "title"
    },
    views: {
        type: Number,
        default: 0 
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {type: String},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
    
});

const model = mongoose.model("Video", videoSchema);

export default model;