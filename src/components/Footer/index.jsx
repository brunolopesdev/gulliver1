import styles from './styles.module.scss'
import logo from '../../assets/logo2.png'
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.footer__links}>
                <p className={styles.title}>Fale Conosco</p>
                <p><a href="mailto:gulivertraveller@gmail.com">gulivertraveller@gmail.com</a></p>
                <p>(11) 5521 - 9521</p>
            </div>
            <div className={styles.footer__links}>
                <p className={styles.title}>Siga-nos</p>
                <div>
                    <IoLogoInstagram size={40} />
                    <FaSquareFacebook size={40} />
                </div>
            </div>
        </footer>
    )
}