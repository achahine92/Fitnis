import { Schema, model } from 'mongoose'

const WorkoutPlanSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, default: 'My Workout Plan' },
  goal: { type: String },
  targetMuscles: [String],
  curatedFromAPI: { type: Boolean, default: true },
//   exercises: [{
//     name: String,
//     bodyPart: String,
//     equipment: String,
//     gifUrl: String,
//     target: String,
//     videoLinks: [String],
//     sets: Number,
//     reps: Number,
//     completed: { type: Boolean, default: false }
//   }],
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

const WorkoutPlan = model("WorkoutPlan", WorkoutPlanSchema)
export default WorkoutPlan