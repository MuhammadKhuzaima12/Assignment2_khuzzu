import Link from "next/link";
import Image from "next/image";
import style from "./header.module.css";
import logo from '/src/app/images/logo.png';
const Header = () => {
    return(
        <nav className={style.navbar}>
            <div className={style.web}>
            <Image className={style.image} src={logo} alt="logo" />
            <h1 className={style.name}>Cards Display</h1>
            </div>
            <div className={style.navigate}>
            <ul className={style.list}>
                <li className={style.li}>
                    <Link className={style.link} href="http://localhost:3000" target="_self">Home</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} href="http://localhost:3000/about" target="_self">About</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} href="http://localhost:3000/cards" target="_self">Cards</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} href="http://localhost:3000/animated" target="_self">Animated Cards</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} href="">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}
export default Header;