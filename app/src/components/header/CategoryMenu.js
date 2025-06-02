import React from "react"
import { Link } from "react-router-dom"
import styles from "./CategoryMenu.module.css"

const menuData = {
    "Śniadania": [
    { name: "Szakszuka", path: "/Recipe4" }
  ],

  "Obiady": [
    { name: "Makaron z kurczakiem", path: "/Recipe1" },
    { name: "Tacos", path: "/Recipe2" },
    { name: "Ryż smażony", path: "/Recipe3" }
  ],
  "Desery": [
    { name: "Sernik", path: "" },
  ]
}

function CategoryMenu() {
  return (
    <div className={styles.dropdown}>
      <button className={styles.menuButton}>Przepisy</button>
      <div className={styles.dropdownContent}>
        {Object.entries(menuData).map(([category, recipes]) => (
          <div className={styles.submenu} key={category}>
            <div className={styles.submenuTitle}>{category}</div>
            <div className={styles.submenuItems}>
              {recipes.map(recipe => (
                <Link key={recipe.name} to={recipe.path}>{recipe.name}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu
