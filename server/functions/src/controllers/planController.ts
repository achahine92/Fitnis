import WorkoutPlan from "../models/WorkoutPlan"
// import establishConnection from "../middleware/establishConnection"
import HTTPHandler from "../helpers/HTTPHandler"

export const getWorkoutPlans: HTTPHandler = async (req, res) => {
  try {
    const plans = await WorkoutPlan.find()
    res.status(200).send(plans)
  } catch (err) {
    res.status(500).send("Error retrieving workout plans")
  }
}

export const getWorkoutPlan: HTTPHandler = async (req, res) => {
  try {
    const plan = await WorkoutPlan.findById(req.params.id)
    if (!plan) res.status(404).send("Workout plan not found")
    res.status(200).send(plan)
  } catch (err) {
    res.status(500).send("Error retrieving workout plan")
  }
}

export const createWorkoutPlan: HTTPHandler = async (req, res) => {
  try {
    const newPlan = new WorkoutPlan(req.body)
    await newPlan.save()
    res.status(201).send(newPlan)
  } catch (err) {
    res.status(400).send("Failed to create workout plan")
  }
}

export const deleteWorkoutPlan: HTTPHandler = async (req, res) => {
  try {
    const deleted = await WorkoutPlan.findByIdAndDelete(req.params.id)
    if (!deleted) res.status(404).send("Workout plan not found")
    res.status(200).send({ message: "Deleted successfully" })
  } catch (err) {
    res.status(500).send("Failed to delete workout plan")
  }
}
