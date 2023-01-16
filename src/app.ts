import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const username = encodeURIComponent("AhalyaPai");
const password = encodeURIComponent("Kamakshi21");
const cluster = "todo";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

let uri = `mongodb+srv://${username}:${password}@${cluster}.yhuxhh9.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
