import express from "express"
import clientRouter from "./clientRouter.js"
import petsRouter from "./api/v1/petsRouter.js"
import adoptionsRouter from "./api/v1/adoptionsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/pets", petsRouter)

rootRouter.use("/api/v1/adoptions", adoptionsRouter)

rootRouter.get("/", (req, res) => {
  res.redirect("/pets")
})

rootRouter.use("/", clientRouter)

export default rootRouter
