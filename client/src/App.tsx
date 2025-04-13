import "./App.css"
import AddWorkout from "./components/AddWorkout"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import { Routes, Route } from "react-router-dom"
import WorkoutPlan from "./components/WorkoutPlan"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import WelcomeScreen from "./components/IntakeForm/WelcomeScreen"
import BirthdayInput from "./components/IntakeForm/EnterAgeStep2"
import NameInput from "./components/IntakeForm/EnterNameStep1"
import SexInput from "./components/IntakeForm/EnterSexStep3"
import WeightInput from "./components/IntakeForm/EnterWeightStep4"
import GoalInput from "./components/IntakeForm/GoalStep6"
import TargetMuscleInput from "./components/IntakeForm/TargetMuscleStep7"
import WhyHereInput from "./components/IntakeForm/WhyHereStep5"
import ReviewIntake from "./components/IntakeForm/ReviewIntake"

function App() {
	return (
		<>
			<Header />
			<br />
			<br />
			<div className="content-wrapper">
				<Routes>
					{/* <div className="intake-form"> */}
					<Route
						path="/intake/welcome-screen"
						element={<WelcomeScreen />}
					/>
					<Route
						path="/intake/name"
						element={<NameInput />}
					/>
					<Route
						path="/intake/age"
						element={<BirthdayInput />}
					/>
						<Route
							path="/intake/sex"
							element={<SexInput />}
						/>
					<Route
						path="/intake/weight"
						element={<WeightInput />}
					/>
					<Route
						path="/intake/why"
						element={<WhyHereInput />}
					/>
					<Route
						path="/intake/goal"
						element={<GoalInput />}
					/>
					<Route
						path="/intake/muscle"
						element={<TargetMuscleInput />}
					/>
					<Route
						path="/intake/review"
						element={<ReviewIntake />}
					/>
					{/* </div> */}
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/"
						element={<Dashboard />}
					/>
					<Route
						path="/workout-plan"
						element={<WorkoutPlan />}
					/>
					<Route
						path="/add-workout"
						element={<AddWorkout />}
					/>
				</Routes>
			</div>
			<NavBar />
		</>
	)
}

export default App
