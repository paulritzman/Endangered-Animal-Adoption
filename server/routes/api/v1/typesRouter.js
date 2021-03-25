import express from "express"
import Pet from '../../../models/Pet.js'
import Type from '../../../models/Type.js'

const typesRouter = new express.Router()

typesRouter.get("/", async (req, res) => {
  try {
    const types = await Type.findAll()
    res.status(200).json({ types })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
  
  petsRouter.get("/:id", async (req, res) => {
    try {
      const pet = await Pet.findTypeById(req.params.id)
      res.status(200).json({ pet })
    } catch (error) {
      let statusCode = 500
      if (error.constructor.name === "TypeError") {
        statusCode = 404
      }
      res.status(statusCode).json({ errors: error })
    }
  })

})

export default typesRouter