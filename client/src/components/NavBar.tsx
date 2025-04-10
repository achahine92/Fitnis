import { FC } from "react"
import Dashboard from "./Dashboard"
import AddWorkout from "./AddWorkout"
import WorkoutPlan from "./WorkoutPlan"

const NavBar: FC = () => {
    
    return (
        <>
        <Dashboard />
        <AddWorkout />
        <WorkoutPlan />
        </>
    )
}

export default NavBar