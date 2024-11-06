import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import style from "./cards.module.css";
import picone from "../images/picone.jpg";
import pic_two from "../images/pic_two.jpg";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <section className={styles.home}>
        <h2 className={styles.h2}>Cards</h2>
        <p className={styles.p}>
          `In the Cards Display section of Cards, we keep things clean and minimal to make sure that everything is easy on your eyes and works perfectly. This card type is ideal for simple, structured pieces of content that allow your message to shine with minimal distractions.

Created to be as straightforward as possible, our cleancards are perfect for all sorts of reasons: project details or even team profiles and post info. Perfect for portfolios, e-commerce sites or business pages; its sleek layout and easy customization makes each card fit into any project.

Focusing on basic design concepts like type, space and scale, our minimal cards offer a simple answer to people who want something clean but sophisticated. Peruse this section and pick the most suitable cards for your content.`

        </p>
        <div className={style.cards}>
        <div className={style.card}>
          <Image className={style.image} src={picone} alt="" />
        </div>
        <div className={style.card}>
          <Image className={style.image} src={pic_two} alt="" />
        </div>
        <div className={style.card}>
          <img className={style.image} src="https://cdn.pixabay.com/photo/2023/10/05/18/59/stones-8296649_1280.jpg" alt="" />
        </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
}
