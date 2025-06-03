import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styles from "./header.module.css"
import LogoStrony from "./LogoStrony.png"
import Person from "./Person.png"
import CategoryMenu from "./CategoryMenu"

function Header(props) {
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    if (value) navigate(value)
  }

  return (
    <>
      <header className={styles.main}>
        <div className={styles.navigation}>
          <NavLink className={({ isActive }) => (isActive ? styles.active_link : styles.link)} to="/">
            Strona główna
          </NavLink>

          <CategoryMenu recipes={props.recipes} />

          <NavLink className={({ isActive }) => (isActive ? styles.active_link : styles.link)} to="add_recipe">
            Dodaj własny przepis
          </NavLink>
        </div>
        <div className={styles.logo}>
          <img src={LogoStrony} alt="img" width={40} height={40} />
          <h2>Gotowanie.pl</h2>
        </div>
        <div className={styles.settings}>
          <img src={Person} alt="ustawienia" width={40} height={40} />
        </div>
      </header>
    </>
  )
}

export default Header
