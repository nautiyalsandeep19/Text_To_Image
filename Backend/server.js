import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./Config/DB.js";
import userRouter from "./Routes/userRoutes.js";
import imageRouter from "./Routes/ImageRoutes.js";


const PORT = process.env.PORT || 4000;
const app=express();

//database connection
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/',(req,res)=>{
    res.send('API Working') 
})

app.listen(PORT,()=>{
    console.log(`server started at PORT : ${PORT}`)
})