const express= require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const  connectDB  = require('./config/db')

dotenv.config()
const userRoutes=require('./routes/userRoutes')
const blogRoutes=require('./routes/blogRoutes')
connectDB()

const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/blog',blogRoutes)

app.listen(8080,()=>{
    console.log("Hey server is running")
})

