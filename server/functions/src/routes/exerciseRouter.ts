import { Router } from "express"
import { 
    deleteExercise, 
    getExercises, 
    getExercisesByMuscle, 
    postExercise 
} from "../controllers/exerciseController"
import { getZylaExercises } from "../controllers/exerciseController"


const routes = Router()

routes.post("/", postExercise)
routes.get("/", getExercises)
routes.get("/:targetMuscle", getExercisesByMuscle)
routes.delete("/:id", deleteExercise)

routes.get("/zyla/:targetMuscle", getZylaExercises)

export default routes