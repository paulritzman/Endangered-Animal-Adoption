import express from "express"
import Pet from "../../../models/Pet.js"
import Type from "../../../models/Type.js"
import Surrender from "../../../models/Surrender.js"

const petsRouter = new express.Router()

petsRouter.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.status(200).json({ pets })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

petsRouter.get("/:type", async (req, res) => {
  console.log("petsRouter... /:type")
  console.log(req.params.type)

  try {
    const pets = await Pet.findByType(req.params.type)
    res.status(200).json({ pets })
  } catch (error) {
    let statusCode = 500
    if (error.constructor.name === "TypeError") {
      statusCode = 404
    }
    res.status(statusCode).json({ errors: error })
  }
})

petsRouter.get("/:type/:id", async (req, res) => {
  console.log("petsRouter... /:type/:id")

  try {
    const pet = await Pet.findById(req.params.id)
    res.status(200).json({ pet })
  } catch (error) {
    let statusCode = 500
    if (error.constructor.name === "TypeError") {
      statusCode = 404
    }
    res.status(statusCode).json({ errors: error })
  }
})

petsRouter.post("/", async (req, res) => {
  try {
    const surrenderApp = new Surrender(req.body)
    await surrenderApp.saveSurrender()
    res.status(201).json({ pet: surrenderApp })
  } catch (error) {
    console.log(error)
    res.json({ errors: error })
  }
})

export default petsRouter
