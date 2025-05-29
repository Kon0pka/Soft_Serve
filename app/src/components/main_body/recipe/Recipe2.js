import React, { useEffect } from "react";
import styles from "./recipe.module.css";
import foodExample from "./foodExample.jpg";

function Recipe2() {
   return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Tacos</h2>
        
        <p><strong>Poziom zaawansowania:</strong> Średni</p>
        <p><strong>Czas przygotowania:</strong> 45 minut</p>
        <p><strong>Ilość porcji:</strong> 4</p>

        <h3>Składniki</h3>
        <ul>
          <li>0,5 kg mięsa mielonego</li>
          <li>2 puszki krojonych pomidorów</li>
          <li>oregano, bazylia, sól</li>
          <li>kilka ząbków czosnku</li>
          <li>przyprawa do taco</li>
          <li>kilka świeżych pomidorów</li>
          <li>ogórek świeży</li>
          <li>cebula</li>
          <li>śmietana 18%</li>
          <li>starty ser żółty</li>
          <li>sałata</li>
          <li>sos tabasco</li>
          <li>4 gotowe tortille</li>
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
        <p>Obsmażyć mięso na patelni. Do garnka wrzucić pomidory z puszki. Dodać wyciśnięty czosnek, oregano, bazylię, sól i mięso.</p>
        <p>Wszystko wymieszać i dusić na średnim ogniu przez ok. 30 minut. Pod koniec dodać przyprawę do taco i sos tabasco (ostrość wedle uznania).</p>
        <p>W międzyczasie pokroić w kostkę pomidory, ogórka, cebulę. Włożyć do miseczki. W drugiej połączyć porwaną sałatę ze śmietaną i serem.</p>
        <p>Do tortilli włożyć po trochu mięsa, świeżych warzyw i sałaty z dodatkami. Zwinąć i gotowe!</p>
      </div>
    </div>
  )
}

export default Recipe2;
