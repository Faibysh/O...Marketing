import styles from "./Header.module.css";
import Logo from "../images/logo1.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__top"]}>
        <div className={styles.container}>
          <div className={styles["header__top-inner"]}>
            <a className={styles.logo} href="#">
              <img src={Logo} alt="Logo" />
            </a>
            <nav className={styles.menu}>
              <button className={styles["menu__btn"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                >
                  <path d="M0 0H30V2H0V0Z" fill="black"></path>
                  <path d="M0 8H30V10H0V8Z" fill="black"></path>
                  <rect y="16" width="30" height="2" fill="black"></rect>
                </svg>
              </button>
              <ul className={styles["menu__list"]}>
                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#">
                    HOME
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#about">
                    ABOUT US
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#blog">
                    BLOG
                  </a>
                </li>
                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#team">
                    OUR TEAM
                  </a>
                </li>

                <li className={styles["menu__list-item"]}>
                  <a className={styles["menu__list-link"]} href="#contact">
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
