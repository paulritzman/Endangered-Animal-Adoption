import express from "express"

const clientRouter = new express.Router()

const clientRoutes = ["/", "/pets", "/pets/type", "/pets/type/:id", "/adopt", "/surrender"]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
