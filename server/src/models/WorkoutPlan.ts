import mongoose from 'mongoose'

const workoutPlanSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, default: 'My Workout Plan'},
    goal: {type: String},
    targetMuscles: [String],
    curatedFromAPI: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('WorkoutPlan', workoutPlanSchema)
