import React, { useState } from "react";

const AnimalSurrenderForm = (props) => {
  const [addPetSurrenderedRecord, setPetSurrenderRecord] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge: "",
    petType: "",
    petImage: "",
    vaccinationStatus: false
  })

  const [errors, setErrors] = useState ("")
  const [redirect, setRedirect] = useState(false);

  const addSurrenderedPet = async () => {
    try {
      const response = await fetch("/api/v1/adoptions", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(addPetSurrenderedRecord)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          return setErrors(body.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        console.log("Your request is in processs!", body)
        setRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  };

  const handleChange = (event) => {
    const targetInput = event.currentTarget
    let value

    if (targetInput.type === "checkbox") {
      value = targetInput.checked
    } else {
      value = targetInput.value
    }

    setPetSurrenderRecord({
      ...addPetSurrenderedRecord,
      [event.currentTarget.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if({...petSurrenderedRecord} !== "") {
      setErrors("")
      props.petSurrenderedRecord(addPetSurrenderedRecord)
      setPetSurrenderRecord({
        ...petSurrenderedRecord
      })
    } else if ({...petSurrenderedRecord} !== "") {
      setErrors("Field is blank. Please enter valid entry")
    }
    addSurrenderedPet()
  }

  let errorMessage
  if (errors) {
    errorMessage = <h2>{errors}</h2>
  }

  const clearForm = (event) => {
    event.preventDefault()
    setErrors("")
    setPetSurrenderRecord({
      ...petSurrenderedRecord
    })
  }

  if (redirect) {
    return <Redirect to="/adoption" />
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Surrender Pet</h1>
      <label htmlFor="name">Name:
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={petSurrenderedRecord.name}
        />
      </label>
      <br />

    <label htmlFor="phoneNumber">Enter Your Phone Number:
      <input
      type="tel"
      id="phoneNumber" 
      name="phoneNumber"
      placeholder="206-000-0000"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      onChange={handleChange}
      value={petSurrenderedRecord.phoneNumber}
      />
      </label>
      <br />

      <label htmlFor="email">Enter Your Email:
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
        value={petSurrenderedRecord.email}
        />
      </label>
      <br />

      <label htmlFor="petName">Pet Name:
      <input
        id="petName"
        type="text"
        name="petName"
        onChange={handleChange}
        value={petSurrenderedRecord.petName}
        />
      </label>
      <br />

      <label htmlFor="petAge">Pet Age:
      <input
        id="petAge"
        type="text"
        name="petAge"
        onChange={handleChange}
        value={petSurrenderedRecord.petAge}
        />
      </label>
      <br />

      <label htmlFor="petType">Pet Type:</label>
      <select id="petType" name="petType">
        <option value="mammal">Mammal</option>
        <option value="reptile">Reptile</option>
        <option value="bird">Bird</option>
        <option value="marsupial">Marsupial</option>
      </select>
      <br />
        
      <label htmlFor="petImage">Pet Image URL:
      <input
        id="petImage"
        type="text"
        name="petImage"
        onChange={handleChange}
        value={petSurrenderedRecord.petImage}
        />
      </label>
      <br />

      <label htmlFor="vaccinationStatus">Vaccination Status:
      <input
        id="vaccinationStatus"
        type="checkbox"
        name="vaccinationStatus"
        onChange={handleChange}
        value={petSurrenderedRecord.vaccinationStatus}
        />
      </label>
      <br />

      {errorMessage}

      <input type="submit" value="Surrender My Pet"/>
      <button className="button" onClick={clearForm}>Clear</button>

    </form>
  )


}

export default AnimalSurrenderForm