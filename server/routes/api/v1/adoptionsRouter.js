import express from "express"
import Pet from "../../../models/Pet.js"
//import Owner from "../../../models/Owner.js"

const adoptionsRouter = new express.Router()

// request to surrender an animal

/*
adoptionsRouter.post("/new", (req, res) => {
  try {
    const pet = new Pet(req.body)
    await pet.surrender()
    res.json({ pet: pet })
  }
  catch (error) {
    res.status(422).json({ errors: error })
  }
})

// request to adopt an animal
adoptionsRouter.post("/adopt", (req, res) => {
  try {
    const adoptionRequest = new Owner(req.body)
    await adoptionRequest.adopt()
    res.json({ adoption: adoption })
  }
  catch (error) {
    res.status(422).json({ errors: error })
  }
})
*/

export default adoptionsRouter