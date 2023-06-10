import React from "react";
import styles from "./Footer.module.css";
import Angle from "../images/angle-up.svg";
import Logo from "../images/logo-white.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__top"]}>
        <a className={styles["footer__logo"]} href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className={styles["footer_social"]}>
          <li className={styles["footer_social-list"]}>
            <a
              className={styles["footer_social-link"]}
              href="https://t.me/Faibysh"
            >
              TELEGRAM
            </a>
          </li>
          <li className={styles["footer_social-list"]}>
            <a
              className={styles["footer_social-link"]}
              href="https://github.com/Faibysh"
            >
              GITHUB
            </a>
          </li>
          <li className={styles["footer_social-list"]}>
            <a
              className={styles["footer_social-link"]}
              href="https://www.linkedin.com/in/bohdan-faibysh-418599264/"
            >
              Linkedin
            </a>
          </li>
          <li className={styles["footer_social-list"]}>
            <a
              className={styles["footer_social-link"]}
              href="https://www.instagram.com/faibysh.b_o/"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <div className={styles["footer__contact"]}>
          <address className={styles.address}>Ukraine, Lviv</address>
          <a className={styles.phone} href="tel:+48577439826">
            +48 577 439 826
          </a>
          <a className={styles.email} href="mailto:faybysh.b@gmail.com">
            faybysh.b@gmail.com
          </a>
        </div>
        <a className={styles["go-top"]} href="#body">
          <img src={Angle} alt="arrow top" />
        </a>
      </div>
      <div className={styles["footer__copy"]}>
        <p>@2023 O...Marketing</p>
      </div>
    </footer>
  );
};

export default Footer;
