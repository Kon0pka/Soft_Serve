import React, { useEffect, useState } from "react"
import styles from "./homePage.module.css"
import { NavLink } from "react-router-dom"

function HomePage(props) {
  const [popularRecipes, setPopularRecipes] = useState([])

  useEffect(() => {
    const sortedRecipes = [...props.recipes].sort((a, b) => b.ocena - a.ocena)
    const topRecipes = sortedRecipes.slice(0, 4)
    setPopularRecipes(topRecipes)
  }, [props.recipes])

  useEffect(() => {
    document.title = "Strona główna"
  }, [])

  return (
    <div className={styles.body}>
      {/* popularne kategorie */}
      <div className={styles.pupularne}>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <h2 className={styles.text}>Popularne kategorie</h2>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
      </div>
      {/* popularne przepis */}
      popularne
      <div className={styles.pupularne}>
        {popularRecipes.map((recipe) => (
          <NavLink to={recipe._id} className={styles.element}>
            <h3 className={styles.elementText}>{recipe.nazwa}</h3>
          </NavLink>
        ))}
      </div>
      {/* popularne przepis */}
    </div>
  )
}

export default HomePage
