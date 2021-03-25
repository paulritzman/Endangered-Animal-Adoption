import express from "express"
import Type from '../../../models/Type.js'

const typesRouter = new express.Router()

typesRouter.get("/", async (req, res) => {
  try {
    const types = await Type.findAll()
    res.status(200).json({ types: types })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

export default typesRouter