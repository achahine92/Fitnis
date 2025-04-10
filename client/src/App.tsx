import './App.css'
import NavBar from './components/NavBar'
import AddWorkout from './components/AddWorkout'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import WorkoutPlan from './components/WorkoutPlan'

function App() {


  return (
    <>
    INTAKE FORM
    <br/>
    <br/>
    <Profile />
    <br/>
    <br/>
    <Dashboard />
    <br/>
    <br/>
    <AddWorkout />
    <br/>
    <br/>
    <WorkoutPlan />
    <br/>
    <br/>
    <NavBar />
    </>
  )
}

export default App
