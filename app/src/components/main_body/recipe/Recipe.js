import React, { useEffect } from "react"

function Recipe() {
  useEffect(() => {
    document.title = "Przepisy"
  }, [])

  return (
    <>
      <h1>Recipe</h1>
    </>
  )
}

export default Recipe
