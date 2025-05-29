import React, { useEffect } from "react";
import styles from "./recipe.module.css";
import foodExample from "./foodExample.jpg";

function Recipe1() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Makaron z kurczakiem</h2>

        <p><strong>Poziom zaawansowania:</strong> Średni</p>
        <p><strong>Czas przygotowania:</strong> 1 godzina</p>
        <p><strong>Ilość porcji:</strong> 4</p>

        <h3>Składniki</h3>
        <ul>
          <li>125 g makaronu wstążki np. pappardelle</li>
          <li>150 g szpinaku</li>
          <li>200 g filetu z kurczaka</li>
          <li>1 ząbek czosnku</li>
          <li>1 łyżka oliwy</li>
          <li>5 kawałków suszonych pomidorów</li>
          <li>1 łyżeczka curry (przyprawy w proszku)</li>
          <li>Szczypta kurkumy</li>
          <li>80 ml śmietanki 30%</li>
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
        <p>Makaron ugotować al dente w osolonej wodzie. W międzyczasie umyć i osuszyć szpinak. Pierś kurczaka pokroić w kosteczkę, doprawić solą, pieprzem i połową startego czosnku.</p>
        <p>Rozgrzać oliwę na patelni, włożyć kurczaka i obsmażyć z każdej strony. Na koniec dodać posiekane suszone pomidory.</p>
        <p>Następnie dodać resztę startego czosnku, przyprawę curry, kurkumę oraz szpinak i smażyć mieszając przez minutę aż szpinak zwiędnie.</p>
        <p>Dodać śmietankę, wymieszać i zagotować. Doprawić solą w razie potrzeby. Na patelnię z sosem włożyć makaron, wymieszać i chwilę pogotować aby sos zgęstniał. Wyłożyć do talerzy.</p>
      </div>
    </div>
  );
}

export default Recipe1;
