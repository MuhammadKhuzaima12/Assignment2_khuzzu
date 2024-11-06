import React from 'react';
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <section className={styles.home}>
        <h2 className={styles.h2}>Cards Display</h2>
        <p className={styles.p}>
          "Cards Display is your prime spot for displaying beautiful, multi use card into uniform designs! From how to create beautiful, clean cards for minimalistic designs or even fonts that animate with it which leads into a pile of fun interactivity - we got you covered. With a range of styles to meet all your needs, from basic greeting card quotes for photo cards, flat lay layout greetings & captions in bulk packs — this is where we have something at any time! Whether you just want to display basic informational cards or elaborate, animated elements that keep your audience hooked in for longer periods of time, Cards Display is the perfect fit for both web developers and designers looking to spruce up user experience with ease! Start browsing and find the card you need for your next project!"

        </p>
      </section>
      <Footer/>

    </div>
  );
}
