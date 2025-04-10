// services/ZylaService.ts
import axios from "axios"

const API_KEY = process.env.ZYLA_API_KEY!
const BASE_URL = "https://work-out-api1.p.rapidapi.com"

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "work-out-api1.p.rapidapi.com",
}

export const getExercisesByTarget = async (targetMuscle: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/target/${targetMuscle}`, {
      headers,
    })
    return response.data
  } catch (error) {
    console.error("Error fetching from Zyla API:", error)
    throw new Error("Zyla API call failed")
  }
}