import { registerUser,loginUser, userCredits } from "../Controllers/userControllers.js";
import express from "express"
import userAuth from "../Middleware/Auth.js";


const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits' , userAuth , userCredits)


export default userRouter   