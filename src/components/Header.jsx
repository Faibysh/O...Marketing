import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../images/logo1.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__top"]}>
        <div className={styles.container}>
          <div className={styles["header__top-inner"]}>
            <a className={styles.logo} href="#">
              <img src={Logo} alt="Logo" />
            </a>
            <nav className={styles.menu}>
              <button
                className={`${styles["menu__btn"]} ${
                  isMenuOpen ? styles.open : ""
                }`}
                onClick={toggleMenu}
              >
                <span className={styles["menu__btn-icon"]}></span>
              </button>
              <ul
                className={`${styles["menu__list"]} ${
                  isMenuOpen ? styles.open : ""
                }`}
              >
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#"
                    onClick={handleMenuLinkClick}
                  >
                    HOME
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#about"
                    onClick={handleMenuLinkClick}
                  >
                    ABOUT US
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#portfolio"
                    onClick={handleMenuLinkClick}
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#blog"
                    onClick={handleMenuLinkClick}
                  >
                    BLOG
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#team"
                    onClick={handleMenuLinkClick}
                  >
                    OUR TEAM
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a
                    className={styles["menu__list-link"]}
                    href="#contact"
                    onClick={handleMenuLinkClick}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
