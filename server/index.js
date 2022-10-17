import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

dotenv.config()

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_ATLAS_USER}:
${process.env.MONGO_ATLAS_PASS}@cluster0.gjlxidw.mongodb.net/?
retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message))
