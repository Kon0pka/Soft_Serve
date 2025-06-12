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
      {/* popularne przepis */}
      <div className={styles.pupularne}>
        {popularRecipes.map((recipe) => (
          // className={styles.element}
          <NavLink to={recipe._id} style={{ backgroundImage: `url(${recipe.img})`, textDecoration: "none", color: "black", width: "15%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h3 className={styles.elementText}>{recipe.nazwa}</h3>
          </NavLink>
        ))}
      </div>
      {/* popularne przepis */}
    </div>
  )
}

export default HomePage
