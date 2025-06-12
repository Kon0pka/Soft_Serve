import React, { useEffect, useState } from "react"
import "./AddRecipe.css"

function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    nazwa: "",
    poziom: "",
    czas: "",
    składniki: [""],
    przepis: "",
    img: "",
    ocena: 5,
    ilosc: "",
    kategoria: "",
  })

  const [image, setImage] = useState()

  function convertToBase64(e) {
    console.log(e)
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      console.log(reader.result)
      setImage(reader.result)
      setRecipeData((prev) => ({ ...prev, img: reader.result }))
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRecipeData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipeData.składniki]
    newIngredients[index] = value
    setRecipeData((prev) => ({
      ...prev,
      składniki: newIngredients,
    }))
  }

  const addIngredient = () => {
    setRecipeData((prev) => ({
      ...prev,
      składniki: [...prev.składniki, ""],
    }))
  }

  const removeIngredient = (index) => {
    const newIngredients = recipeData.składniki.filter((_, i) => i !== index)
    setRecipeData((prev) => ({
      ...prev,
      składniki: newIngredients,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Submitting...")
    console.log("Recipe Data:", recipeData)
    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      })
      const data = await response.json()
      console.log("Server response:", data)
      if (response.ok) {
        alert("Przepis zapisany!")
      } else {
        alert("Błąd podczas zapisywania przepisu.")
      }
    } catch (error) {
      alert("Błąd połączenia z serwerem.")
      console.error("Fetch error:", error)
    }
  }

  useEffect(() => {
    document.title = "Dodaj przepis"
  }, [])

  return (
    <form onSubmit={handleSubmit} className="add-recipe-container">
      <h2>Dodaj własny przepis</h2>
      <div className="form-section">
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="nazwa">Nazwa potrawy</label>
            <input type="text" id="nazwa" name="nazwa" value={recipeData.nazwa} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Składniki</label>
            {recipeData.składniki.map((ingredient, index) => (
              <div key={index} className="ingredient-input">
                <input type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} placeholder="Dodaj składnik" />
                {index > 0 && (
                  <button type="button" onClick={() => removeIngredient(index)} className="remove-ingredient">
                    X
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addIngredient} className="add-ingredient">
              + Dodaj składnik
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="przepis">Przepis</label>
            <textarea id="przepis" name="przepis" rows="10" value={recipeData.przepis} onChange={handleInputChange} required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="img">Zdjęcie</label>
            <label htmlFor="img" className="choose-file-button">
              <input type="file" id="img" name="img" accept="image/*" onChange={convertToBase64} />
              <img src={image} alt="twoje zdjęcie" width={100} height={100} />
            </label>
          </div>
        </div>

        <div className="form-right">
          <div className="form-group">
            <label htmlFor="kategoria">Kategoria</label>
            <select id="kategoria" name="kategoria" value={recipeData.kategoria} onChange={handleInputChange} required>
              <option value="" disabled>
                --Wybierz kategorię--
              </option>
              <option value="śniadanie">Śniadanie</option>
              <option value="obiad">Obiad</option>
              <option value="kolacja">Kolacja</option>
              <option value="deser">Deser</option>
              <option value="przekąska">Przekąska</option>
              <option value="napój">Napój</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="poziom">Poziom trudności</label>
            <select id="poziom" name="poziom" value={recipeData.poziom} onChange={handleInputChange} required>
              <option value="" disabled>
                --Wybierz poziom--
              </option>
              <option value="Podstawowy">Podstawowy</option>
              <option value="Średni">Średni</option>
              <option value="Średnio-zaawansowany">Średnio-zaawansowany</option>
              <option value="Zaawansowany">Zaawansowany</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="czas">Czas przygotowania (minuty)</label>
            <input type="number" id="czas" name="czas" value={recipeData.czas} onChange={handleInputChange} min="1" required />
          </div>

          <div className="form-group">
            <label htmlFor="ilosc">Ilość porcji</label>
            <input type="number" id="ilosc" name="ilosc" value={recipeData.ilosc} onChange={handleInputChange} min="1" required />
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button type="submit">Zapisz przepis</button>
      </div>
    </form>
  )
}

export default AddRecipe
