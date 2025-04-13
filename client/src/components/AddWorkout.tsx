import { FC } from "react"
import MuscleSelector from "./MuscleSelector"
import WorkoutListByMuscle from "./WorkoutListByMuscle"

const AddWorkout: FC = () => {
    
    return (
        <>
        <MuscleSelector />
        <br/>
        <h2>Exercises:</h2>
        <br/>
        <WorkoutListByMuscle />
        </>
    )
}

export default AddWorkout