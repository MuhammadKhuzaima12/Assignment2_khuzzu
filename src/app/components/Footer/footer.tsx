import React from "react";
import style from "./footer.module.css";
const Footer = () => {
    return(
        <footer className={style.footer}>
            <h1 className={style.h1}><u>Contact Us</u></h1>
            <h3 className={style.h3}>Email</h3>
            <h3 className={style.h3}>Facebook</h3>
            <h3 className={style.h3}>Instagram</h3>
            <h3 className={style.h3}>Github</h3>
            <hr />
            <p className={style.p}>@ 2024, All Right Reserved by Muhammad Khuzaima</p>

        </footer>
    );
}
export default Footer;
