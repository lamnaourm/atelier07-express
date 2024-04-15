import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import userRoutes from './routes/user.js'

dotenv.config()
const port = process.env.PORT || 3000
const url = process.env.URL_MONGOOSE

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(url).then(() => {
    console.log('Connected to Mongodb')
}).catch((err) => {
    console.log('Not Connected to Mongodb')
})

app.use('/api/user', userRoutes)

app.listen(port, (err) => {
    if(err)
        console.log('Server not started')
    else 
        console.log('Server started')
})



