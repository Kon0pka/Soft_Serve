import React, { useEffect } from "react"
import './AddRecipe.css';

function AddRecipe() {
  useEffect(() => {
    document.title = "Dodaj przepis"
  }, [])

  return (
    <>
      <div className="add-recipe-container">
        <h2>Dodaj własny przepis</h2>
          <div className="form-section">
            <div className="form-left">
              <div className="form-group">
                <p>Nazwa potrawy</p>
                <br />
                <input type="text" id="dish_name" name="dish_name" />
              </div>

              <div className="form-group">
                <p>Składniki i przygotowanie</p>
                <br />
                <textarea id="ingredients_instructions" name="skladniki" rows="10"></textarea>
              </div>

                <div className="form-group">
                    <p>Wybierz zdjęcie</p>
                    <br />
                    <label htmlFor="choose_image" className="choose-file-button">
                      Choose...
                      <input type="file" id="choose_image" name="wybierz_zdjecie" accept="image/*" />
                    </label>
                </div>

            </div>

            <div className="form-right">
                <div className="form-group select-like">
                    <p>Rodzaj przepisu</p>
                    <br />
                    <select id="recipe_type" name="recipe_type">
                      <option value="" disabled selected hidden>--Wybierz rodzaj--</option>
                      <option value="breakfast">Śniadanie</option>
                      <option value="lunch">Objad</option>
                      <option value="dinner">Kolacja</option>
                      <option value="dessert">Deser</option>
                      <option value="snack">Przekąska</option>
                      <option value="drink">Napój</option>
                      <option value="other">Inne</option>
                    </select>
              </div>

              <div className="form-group select-like">
                  <p>Czas przygotowania przepisu</p>
                  <br />
                  <select id="preparation_time" name="czas_gotowania">
                    <option value="" disabled selected hidden>--Wybierz czas--</option>
                    <option value="5-15min">5-15min</option>
                    <option value="15-30min">15-30min</option>
                    <option value="30-45min">30-45min</option>
                    <option value="1hour">1 godz</option>
                    <option value="1.5hour">1,5 godz</option>
                    <option value="1.5hour+">1,5 godz +</option>
                  </select>
              </div>

              <div className="form-group select-like">
                <p>Wybierz poziom trudności</p>
                <br />
                <select id="difficulty_level" name="poziom_zaawansowania">
                  <option value="" disabled selected hidden>--Wybierz poziom--</option>
                  <option value="basic">Podstawowy</option>
                  <option value="medium">Średni</option>
                  <option value="intermediate">Średnio-zaawansowany</option>
                  <option value="advanced">Zaawansowany</option>
                </select>
              </div>

              <div className="form-group">
                <p>Ilość porcji</p>
                <br />
                <input type="text" id="number_of_portions" name="ilosc_porcji" />
              </div>
            </div>
          </div>
          <div className="submit-section">
            <button>Zatwierdź</button>
          </div>
      </div>
    </>
  )
}

export default AddRecipe
