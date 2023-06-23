const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const projectRoute = require("./routes/projectRoute")
require("dotenv").config({ path: "./config/.env" })
const app = express()
app.use(cors())
// app.use(cors({
//     credentials: true,
//     origin: (o, cb) => {
//         // const allowed = "https://subodh-portfolio.up.railway.app"
//         const allowed = "http://localhost:5000"
//     }
// }))
app.use(express.static("public"))
// app.use()
app.use(express.json())
app.use("/projects", projectRoute)
connectDB()
const PORT = process.env.PORT
app.listen(PORT, console.log(`server running on port ${PORT}`))