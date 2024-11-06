import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <section className={styles.home}>
        <h2 className={styles.h2}>Animated Cards</h2>
        <p className={styles.p}>
          "Animated Cards are a category where the interactivity and motion patterns reign supreme in Cards Display. Welcome! The animations within our cards surpass the static maintain engaging users and making interactions memorable. And they really amplify what you're doing with beautiful subtle hover effects, fun transitions and lively animations.

Our animated cards work great in the background to delight your users and are perfect for portfolios, product galleries or any project that needs a visual boost. These cards show content as well, but also interact with the user to highlight important things in your interface which make it more interactive.

Nestled within our animated set, animate your web or mobile projects with designs that can turn ordinary content into an interactive and visually advanced experience. You can easily add motion and life to your designs with Cards Display."
        </p>
      </section>
      <Footer/>

    </div>
  );
}
