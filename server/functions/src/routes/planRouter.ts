import { Router } from "express"
import {
  getWorkoutPlans,
  getWorkoutPlan,
  createWorkoutPlan,
  deleteWorkoutPlan
} from "../controllers/planController"

const router = Router()

router.get("/", getWorkoutPlans)
router.post("/", createWorkoutPlan)
router.get("/:id", getWorkoutPlan)
router.delete("/:id", deleteWorkoutPlan)

export default router
