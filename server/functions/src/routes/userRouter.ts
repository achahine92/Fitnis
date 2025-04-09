import { Router } from "express"
import {
	deleteUser,
	getUser,
	getUsers,
	postUser,
	putUser,
} from "../controllers/userController"

const routes = Router()

routes.post("/", postUser)
routes.get("/", getUsers)
routes.get("/:id", getUser)
routes.put("/:id", putUser)
routes.delete("/:id", deleteUser)

export default routes