import express from "express"

const clientRouter = new express.Router()

const clientRoutes = ["/", "/pets", "/pets/type", "/pets/type/:id", "/adoptions/new"]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
