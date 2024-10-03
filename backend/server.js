import express, { urlencoded }  from "express"
// import cookieParser from 'cookie-parser'
// import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from "./utils/db.js"

dotenv.config();
const app = express();


//middleware
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser())
// const corsOptions = {
//   origin:"//http/localhost:3000",
//   credentials:true
// }
// app.use(cors(corsOptions))

const port = process.env.PORT || 8001;

app.get("/", (req, res)=>{
  res.send("home page");
})

app.get("/about", (req, res)=>{
  res.send("About us");
})

app.listen(port,()=>{
  connectDb();
  console.log(`Server runnnig on ${port}`)
})