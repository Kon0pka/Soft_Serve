import React, { useEffect } from "react"
import styles from "./homePage.module.css"
import { NavLink } from "react-router-dom"

function HomePage() {
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
      <div className={styles.pupularne}>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <h2 className={styles.text}>Popularne przepisy</h2>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
        <NavLink to="/template" className={styles.element}>
          <h3 className={styles.elementText}>Example</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage
