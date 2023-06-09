const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a className="footer__logo" href="#">
          <img src="images/logo-white.svg" alt="Logo" />
        </a>
        <ul className="footer_social">
          <li className="footer_social-list">
            <a className="footer_social-link" href="https://t.me/Faibysh">
              TELEGRAM
            </a>
          </li>
          <li className="footer_social-list">
            <a className="footer_social-link" href="https://github.com/Faibysh">
              GITHUB
            </a>
          </li>
          <li className="footer_social-list">
            <a
              className="footer_social-link"
              href="https://www.linkedin.com/in/bohdan-faibysh-418599264/"
            >
              Linkedin
            </a>
          </li>
          <li className="footer_social-list">
            <a
              className="footer_social-link"
              href="https://www.instagram.com/faibysh.b_o/"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <div className="footer__contact">
          <address className="address">Ukraine, Lviv</address>
          <a className="phone" href="tel:+48577439826">
            +48 577 439 826
          </a>
          <a className="email" href="mailto:faybysh.b@gmail.com">
            faybysh.b@gmail.com
          </a>
        </div>
        <a className="go-top" href="#body">
          <img src="images/angle-up.svg" alt="arrow top" />
        </a>
      </div>
      <div className="footer__copy">
        <p>@2023 O...Marketing</p>
      </div>
    </footer>
  );
};

export default Footer;
