import express from "express"
import Pet from '../../../models/Pet.js'

const petsRouter = new express.Router()

petsRouter.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.status(200).json({ pets: pets })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

petsRouter.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id)
    res.status(200).json({ pet: pet })
  }
  catch (error) {
    let statusCode = 500
    if (error.constructor.name === "TypeError") {
      statusCode = 404
    }
    res.status(statusCode).json({ errors: error })
  }
})

petsRouter.get("/types", async (req, res) => {
  try {
    const petType = await Pet.findAllTypes()
    res.status(200).json({ petType: petType })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

petsRouter.get("/:type/:id", async (req, res) => {
  try {
    const pet = await Pet.findTypeById(req.params.id)
    res.status(200).json({ pet: pet })
  }
  catch (error) {
    let statusCode = 500
    if (error.constructor.name === "TypeError") {
      statusCode = 404
    }
    res.status(statusCode).json({ errors: error })
  }
})

export default petsRouter