const express=require('express')
const app= express()
const env= require('dotenv')

env.config({
    path:'./.env'
})
app.use(express.json())


// Database ke liye
let db= require('./Database')
db()

let router= require('./Routes/UserRoute')
app.use('/api',router)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}`)
})