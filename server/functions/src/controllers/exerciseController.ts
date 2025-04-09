import Exercise from "../models/Exercise"
import HTTPHandler from "../helpers/HTTPHandler"

// GET - READ ALL
export const getExercises: HTTPHandler = async (req, res) => {
    try {
        const exercises = await Exercise.find()
        res.status(200).send(exercises)
    } catch (err) {
        res.status(500).send("Internal Sever Error")
    }
}

// GET - READ MANY BY MUSCLE GROUP
export const getExercisesByMuscle: HTTPHandler = async (req, res) => {
    try {
        const { targetMuscle } = req.params
        const exercises = await Exercise.find({ targetMuscle: targetMuscle })
        if (!exercises || exercises.length === 0) {
            res.status(404).send("No exercises found for this specific muscle")
        }
        res.status(200).send(exercises)
    } catch (err) {
        res.status(500).send("Exercise not found")
    }
}

// POST - ADD EXERCISE TO USERR WORKOUT PLAN
export const postExercise: HTTPHandler = async (req, res) => {
    try {
        const exercise = new Exercise(req.body)
        await exercise.save()
        res.status(201).send(exercise)
    } catch (err) {
        res.status(400).send("Bad request")
    }
}

// PATCH - UPDATE SETS/REPS

// DESTROY - DELETE EXERCISE
export const deleteExercise: HTTPHandler = async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.body)
        res.status(204).send()
    } catch (err) {
        res.status(404).send("Exercise not found")
    }
}