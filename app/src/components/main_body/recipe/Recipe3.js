import React, { useEffect } from "react";
import styles from "./recipe.module.css";
import foodExample from "./foodExample.jpg";

function Recipe3() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Ryż smażony</h2>

        <p><strong>Poziom zaawansowania:</strong> Niski</p>
        <p><strong>Czas przygotowania:</strong> 15 minut</p>
        <p><strong>Ilość porcji:</strong> 2</p>

        <h3>Składniki</h3>
        <ul>
          <li>3 łyżki Sosu sojowego jasnego House of Asia</li>
          <li>250 g ryżu jaśminowego ugotowanego dzień wcześniej</li>
          <li>1 marchewka, pokrojona w małą kostkę</li>
          <li>2 jajka</li>
          <li>¼ cebuli, pokrojona w małą kostkę</li>
          <li>2 ząbki czosnku, drobno pokrojone</li>
          <li>2 łyżki mrożonego zielonego groszku</li>
          <li>¼ czerwonej papryki; pokrojona w małą kostkę</li>
          <li>2 łyżki drobno pokrojonej zielonej dymki</li>
          <li>2 łyżki oleju, do smażenia</li>
          <li>szczypta czarnego pieprzu</li>
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
        <p>Rozgrzej olej na patelni zeszklij cebulę oraz czosnek dodaj pokrojone warzywa smaż 2-3 minuty.</p>
        <p>Do podsmażonych warzyw wsyp zimny ryż podsmażaj go przez 8-10 minut co jakiś czas mieszaj.</p>
        <p>Pod koniec zgranij ryż na jedną stronę patelni i wybij jajka poczekaj aż się zetną i wymieszaj z ryżem. Na koniec dopraw świeżo mielonym pieprzem.</p>
        <p>Gotowe danie przełóż na talerz i posyp pokrojoną zieloną dymką.</p>
      </div>
    </div>
  );
}

export default Recipe3;
