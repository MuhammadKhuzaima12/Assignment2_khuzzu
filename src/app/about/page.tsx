import React from 'react';
import styles from "../page.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <section className={styles.home}>
        <h2 className={styles.h2}>About</h2>
        <p className={styles.p}>
          "At Cards Display, we believe simplicity and creativity is the key to good web design. On our platform, we are committed to creating a smooth experience showing beautifully designed card components. From Clean, Minimalistic Designs That Keep Your Communication Crystal Clear To Stunning Animated Cards Built Right Into Them And Bring A Dynamic Feel To Any Project You Are Working On.

Our static cards are ideal for showcasing content in a well-structured, clean design style and our animated cards add interactivity & movement to make your designs more visually engaging. Cards Display provides solutions that combine design with practical functionality, from portfolios to product displays you can create beautiful interfaces easily. Our goal is to provide developers and designers a unique way for them take their projects on next level with heal of card design."

        </p>
      </section>
      <Footer/>

    </div>
  );
}
