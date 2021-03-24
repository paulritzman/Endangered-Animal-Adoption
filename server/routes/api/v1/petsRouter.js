import express from "express"
import Pet from '../../../models/Pet.js'

const petsRouter = new express.Router()

petsRouter.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.json({ pets: pets })
    console.log(pets)
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

petsRouter.get("/type", async (req, res) => {
  try {
    const petType = await Pet.findAllTypes()
    res.json({ petType: petType })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

petsRouter.get("/type/:id", async (req, res) => {
  try {
    const pet = await Pet.findTypeById(req.params.id)
    res.json({ pet: pet })
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