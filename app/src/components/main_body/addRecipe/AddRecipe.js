import React, { useEffect } from "react"

function AddRecipe() {
  useEffect(() => {
    document.title = "Dodaj przepis"
  }, [])

  return (
    <>
      <h1>AddRecipe</h1>
    </>
  )
}

export default AddRecipe
