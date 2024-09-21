import express  from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from "./utils/db.js"
import userRoute from './routes/userRoute.js'
dotenv.config({})
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
const corsOptions = {
  origin:"http://localhost:3000",
 
  credentials:true
}
app.use(cors(corsOptions))

const PORT =  process.env.PORT ||3000

//api's
app.use("/api/v1/user",userRoute)

// http://localhost:8000/api/v1/user/register
// http://localhost:8000/api/v1/user/login

app.listen(PORT,()=>{
  connectDb();
  console.log(`Server runnnig on ${PORT}`)
})