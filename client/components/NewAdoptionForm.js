import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"

const NewAdoptionForm = props => {
  const [newAdoption, setNewAdoption] = useState({
    name: "",
    phone_nummber: "",
    email: "",
    home_status: ""
  })

  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewAdoption = async () => {
    try {
      const response = await fetch("/api/v1/adoptions", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newAdoption)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          return setErrors(body.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        const body = await response.json()
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const handleInputChange = (event) => {
    setNewAdoption({
      ...newAdoption,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewAdoption()
  }

  if (shouldRedirect) {
    return <Redirect to="/adopt" />
  }

  return (
    <>
      <h1>Adopt Me!</h1>
      <h3><Link to="/pets">Back to All Adoptable Animals</Link></h3>

      {/* <ErrorList errors={errors} /> */}
      
      <form onSubmit={handleSubmit} className="callout">
        <label htmlFor="name">
         Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={newAdoption.name}
          />
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            placeholder="206-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleInputChange}
            value={newAdoption.phoneNumber}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleInputChange}
            value={newAdoption.email}
          />
        </label>
        
        <label htmlFor="homeStatus">Home Status:</label>
        <select id="homeStatus" name="homeStatus">
        <option value="rent">Rent</option>
        <option value="own">Own</option>
        </select>
        <input className="button" type="submit" value="Adopt"/>
      </form>
    </>
  )
}

export default NewAdoptionForm