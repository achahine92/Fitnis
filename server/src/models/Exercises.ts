import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema({
        name: {type: String, required: true},
        bodyPart: {type: String, required: true},
        equipment: {type: String, required: true},
        gifUrl: {type: String, required: true},
        target: {type: String, required: true},
        videoLinks: {type: [String], required: true},
        sets: {type: Number, required: true},
        reps: {type: Number, required: true},
        completed: { type: Boolean, default: false }
}, {
    timestamps: true
})

export default mongoose.model('Exercise', exerciseSchema)