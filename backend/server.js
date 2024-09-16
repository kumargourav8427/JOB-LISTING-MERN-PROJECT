import express, { urlencoded }  from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from "./utils/db.js"

dotenv.config({})
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
const corsOptions = {
  origin:"//http/localhost:3000",
  credentials:true
}
app.use(cors(corsOptions))

const PORT = 4000 || process.env.PORT

app.listen(PORT,()=>{
  connectDb();
  console.log(`Server runnnig on ${PORT}`)
})