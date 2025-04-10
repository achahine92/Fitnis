import { FC } from "react"
import MuscleSelector from "./MuscleSelector"
import WorkoutListByMuscle from "./WorkoutListByMuscle"

const AddWorkout: FC = () => {
    
    return (
        <>
        <MuscleSelector />
        <br/>
        Exercises:
        <br/>
        <WorkoutListByMuscle />
        </>
    )
}

export default AddWorkout