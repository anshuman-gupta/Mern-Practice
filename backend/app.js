const express= require("express")
const app= express()

const cors = require("cors")
app.use(cors())
const bodyparser= require("body-parser")
app.use(bodyparser.json())
const routes= require("./route/route")
app.use("/",routes)

app.listen(3001,()=>console.log("server is running at 3000"))