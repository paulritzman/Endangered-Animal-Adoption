import express from "express"

const clientRouter = new express.Router()

const clientRoutes = ["/", "/pets", "pets/:type", "/pets/bird/:id", "/pets/mammal/:id", "/pets/marsupial/:id", "/pets/reptile/:id", "/pets/types", "/adopt", "/surrender", "/regions"]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
