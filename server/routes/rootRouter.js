import express from "express"
import clientRouter from "./clientRouter.js"
import petsRouter from "./api/v1/petsRouter.js"
import typesRouter from "./api/v1/typesRouter.js"
import regionsRouter from "./api/v1/regionsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/pets", petsRouter)
rootRouter.use("/api/v1/types", typesRouter)
rootRouter.use("/api/v1/regions", regionsRouter)

rootRouter.get("/", (req, res) => {
  res.redirect("/pets")
})

rootRouter.use("/", clientRouter)

export default rootRouter
