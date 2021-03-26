import express from "express"
import Region from '../../../models/Region.js'

const regionsRouter = new express.Router()

regionsRouter.get("/", async (req, res) => {
  try {
    const regions = await Region.findAll()
    res.status(200).json({ regions })
  }
  catch (error) {
    res.status(500).json({ errors: error })
  }
})

export default regionsRouter