import React, { useEffect } from "react"
import styles from "./recipe.module.css"

function RecipeTemplate(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>{props.recipe.nazwa}</h2>

        <p>
          <strong>Poziom zaawansowania:</strong> {props.recipe.poziom}
        </p>
        <p>
          <strong>Czas przygotowania:</strong> {props.recipe.czas}
        </p>
        <p>
          <strong>Ilość porcji:</strong> {props.recipe.ilosc}
        </p>

        <h3>Składniki</h3>
        <ul>
          {props.recipe.składniki.map((skladnik) => (
            <li>{skladnik}</li>
          ))}
        </ul>

        <hr />

        <div className={styles.rating}>
          <p>Oceń przepis</p>
          <div className={styles.stars}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={props.recipe.img} alt={props.recipe.img} width={300} height={300} />
        <h3>Przepis</h3>
        <p className={styles.przepis}>{props.recipe.przepis}</p>
      </div>
    </div>
  )
}

export default RecipeTemplate
