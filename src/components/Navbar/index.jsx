import styles from './styles.module.scss'
import logo from '../../assets/logo2.png'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
}, [isMobile])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt="Logo" />
      </div>
      {!isMobile ? (
      <div className={styles.navbar__links}>
        <a href="#">Sobre</a>
        <a href="#">Cupons de desconto</a>
        <a href="#">Promoções</a>
        <a href="#">Parceiros</a>
      </div>

      ) : <GiHamburgerMenu size={40} color='white'/>}
    </nav>
  )
}