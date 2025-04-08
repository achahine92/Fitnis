import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: {type: Number, required: true},
    sex: {type: String, enum: ['male', 'female', 'other'], required: true},
    weight: {type: Number, required: true},
    height: {type: Number, required: true},
    fitnessLevel: {type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true},
    goal: {type: String, required: true},
    targetMuscles: [{type: String}],
    motivation: {type: String, required: true}
}, {
    timestamps: true,
})



export default mongoose.model('User', userSchema)




