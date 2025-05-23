import {
	createContext,
	useContext,
	useState,
	ReactNode,
} from "react"

type IntakeFormData = {
	name?: string
	birthday?: string
	age?: number
	weight?: number
	sex?: string
	goal?: string
	targetMuscle?: string
	reason?: string
}

type IntakeFormContextType = {
	data: IntakeFormData
	updateData: (newData: Partial<IntakeFormData>) => void
}

const IntakeFormContext = createContext<
	IntakeFormContextType | undefined
>(undefined)

export const IntakeFormProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [data, setData] = useState<IntakeFormData>({})

	const updateData = (newData: Partial<IntakeFormData>) => {
		setData((prev) => ({ ...prev, ...newData }))
	}

	return (
		<IntakeFormContext.Provider value={{ data, updateData }}>
			{children}
		</IntakeFormContext.Provider>
	)
}

export const useIntakeForm = () => {
	const context = useContext(IntakeFormContext)
	if (!context)
		throw new Error(
			"useIntakeForm must be used within a IntakeFormProvider"
		)
	return context
}
