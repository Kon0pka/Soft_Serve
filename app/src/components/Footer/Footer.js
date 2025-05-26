import React, { useEffect } from "react"
import styles from "./footer.module.css"
import Facebook from "./Facebook.png"
import Twitter from "./twitter.png"
import TikTok from "./TikTok.png"

function Footer() {
  return (
    <>
      <footer className={styles.body}>
        <div className={styles.linki}>
          <a href="https://www.facebook.com" target="_blank">
            <img className={styles.img} src={Facebook} alt="1" />
          </a>
          <a href="https://x.com/" target="_blank">
            <img className={styles.img} src={Twitter} alt="2" />
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <img className={styles.img} src={TikTok} alt="3" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
