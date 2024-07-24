import express from "express"
import dotenv from "dotenv"
import router from "./Routes/routes.route.js"
import cors from 'cors'
import {DBConnection} from "./db/db.js"

const app = express()

// Configure dotenv
dotenv.config({
    path : "./.env"
})
app.use(cors())
const PORT = process.env.PORT || 5000

// Route --------------------------------------------------
app.use('/',router)

DBConnection()
.then(()=>{
    app.listen(PORT ,()=>{
        console.log(`App Running on Port : ${PORT}`);
    })
})
.catch((error)=>{
    console.log(`ERROR : ${error}`);
})