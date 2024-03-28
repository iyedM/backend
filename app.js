import express, { json, urlencoded } from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"

import initializeVeramo from "./veramo/setup.js"
import indexRouter from "./routes/index.js"
import veramoRouter from "./routes/veramo.js"

const app = express()
const agent = initializeVeramo()

app.use(logger("dev"))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", indexRouter)
app.use("/veramo", veramoRouter)

export default app
