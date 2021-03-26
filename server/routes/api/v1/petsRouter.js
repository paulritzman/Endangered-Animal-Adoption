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
  const animalType = req.params.type
  console.log(animalType)
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
    console.log(req.body)
    const newpetName = req.body.petName
    const newPetname = new Pet(newpetName)
    newPetname.savePet()
    res.json({ newPetname })

    const newpetAge = req.body.petAge
    const newPetage = new Pet(newpetAge)
    newPetage.savePet()
    res.json({ newPetage })

    const newpetImage = req.body.petImage
    const newPetimage = new Pet(newpetImage)
    newPetimage.savePet()
    res.json({ newPetimage })

    const newTypeData = req.body.petName
    const newTypeName = new Type(newTypeData)
    newTypeName.saveType()
    res.json({ newTypeName })

    const newSurrendername = req.body.name
    const newSurrenderName = new Surrender(newSurrendername)
    newSurrenderName.saveSurrender()
    res.json({ newSurrenderName })

    const newSurrenderPhone = req.body.phoneNumber
    const newSurrenderphone = new Surrender(newSurrenderPhone)
    newSurrenderphone.saveSurrender()
    res.json({ newSurrenderphone })
    
    const newSurrenderEmail = req.body.email
    const newSurrenderemail = new Surrender(newSurrenderEmail)
    newSurrenderemail.saveSurrender()
    res.json({ newSurrenderemail })
  
  } catch (error) {
    console.log(error)
    res.json({ errors: error })
  }
})

export default petsRouter
