import React, { useEffect } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./header.module.css"
import LogoStrony from "./LogoStrony.png"
import Person from "./Person.png"

function Header() {

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };

  return (
    <>
      <header className={styles.main}>
        <div className={styles.navigation}>
          <NavLink className={({ isActive }) => (isActive ? styles.active_link : styles.link)} to="/">
            Strona główna
          </NavLink>

          <select onChange={handleChange} defaultValue="" className={styles.select}>
            <option value="" disabled>Wybierz przepis</option>
            <option value="/recipe1">Przepis 1</option>
            <option value="/recipe2">Przepis 2</option>
            <option value="/recipe3">Przepis 3</option>
            <option value="/recipe4">Przepis 4</option>
          </select>

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
