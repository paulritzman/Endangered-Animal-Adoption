import React, { useState, useEffect } from "react"

import TestComponent from "./TestComponent"

const TestComponentList = (props) => {
  const [tests, setTests] = useState([])

  const getTests = async () => {
    try {
      const response = await fetch("/api/v1/pets")
      
      if (!response.ok) {
        const errorMessage = `${response.status}: ${response.statusText}`
        const error = new Error(errorMessage)
        throw error
      }

      const responseBody = await response.json()
      setTests(responseBody.pets)
    }
    catch (error) {
      console.log(`Error in fetch : ${error}`)
    }
  }

  useEffect(() => {
    getTests()
  }, [])

  const testItems = tests.map(test => {
    return (
      <TestComponent
        key={test.id}
        petName={test.name}
      />
    )
  })

  return (
    <div>
      <h1>Pets</h1>
      <ul>
        {testItems}
      </ul>
    </div>
  )

}

export default TestComponentList