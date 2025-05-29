import React, { useEffect } from "react";
import styles from "./recipe.module.css";
import foodExample from "./foodExample.jpg";

function Recipe4() {
   return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Szakszuka</h2>
        
        <p><strong>Poziom zaawansowania:</strong> Niski</p>
        <p><strong>Czas przygotowania:</strong> 20 minut</p>
        <p><strong>Ilość porcji:</strong> 2</p>

        <h3>Składniki</h3>
        <ul>
          <li>2 pomidory</li>
          <li>1/2 łyżki masła lub oliwy</li>
          <li>przyprawy: sól i świeżo zmielony pieprz, szczypta</li>
          <li>oregano oraz opcjonalnie chili i kminu rzysmkiego</li>
          <li>2 jajka</li>
          <li>do podania: świeża bazylia, bagietka</li>
        </ul>

        <hr />

        <div className={styles.rating}>
          <p>Oceń przepis</p>
          <div className={styles.stars}>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={foodExample} alt="Przykładowe zdj" />
        <h3>Przepis</h3>
        <p>Przygotować pomidory: sparzyć, obrać ze skórki, pokroić na ćwiartki, wykroić szypułki, miąższ pokroić w kosteczkę.</p>
        <p>Na niedużą patelnię (około 20 cm średnicy) włożyć masło lub wlać oliwę oraz starty czosnek, chwilę podsmażyć.</p>
        <p>Pomidory włożyć na patelnię, doprawić solą, pieprzem i przyprawami. Wymieszać i intensywnie smażyć na większym ogniu przez około 4 minuty, już bez mieszania (wówczas pomidory odparują i zachowają swoją strukturę, jeśli będziemy mieszać zrobi się przecier).</p>
        <p>Do podsmażonych pomidorów wbić jajka, doprawić solą. Przykryć i gotować przez około 3 minuty lub do czasu aż białka jajek będą ścięte. Podawać ze świeżą bazylią i bagietką.</p>
      </div>
    </div>
  )
}

export default Recipe4;
