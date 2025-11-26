import styles from "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__content--top">
          <div className="footer__langbar">
            <button className="footer__lang--btn" type="button">
              <span className="footer__lang--circle"></span>
              <span className="footer__lang--text">english</span>
              <div className="footer__lang--img-wraper">
                <img
                  src="icons/corner-down.svg"
                  alt="choice language"
                  className="footer__lang--corner"
                />
              </div>
            </button>
          </div>

          <nav className="footer__navbar">
            <ul className="footer__navbar--list">
              <li>
                <a href="#">CLASSICS BASICS</a>
              </li>
              <li>
                <a href="#">CASUAL CHIC</a>
              </li>
              <li>
                <a href="#">SPORT BADDIE</a>
              </li>
              <li>
                <a href="#">SWIM SWIM</a>
              </li>
              <li>
                <a href="#">ELEGANT EVENING</a>
              </li>
              <li>
                <a href="#">ALL COLLECTIONS</a>
              </li>
              <li>
                <a href="#">CONTACTS</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
            </ul>
          </nav>

          <div className="footer__copyright">
            <p>&copy; 2024 liberty</p>
            <p>made by circle studio</p>
          </div>
        </div>

        <div className="footer__content--centr">
          <address className="footer__content--adress">
            <a href="mailto:EXAMPLE@GMAIL.COM" className="footer__email">
              EXAMPLE@GMAIL.COM
            </a>
            <p className="footer__location">WILCA 44, WARSAW, POLAND</p>
          </address>

          <ul className="footer__social-media">
            <li>
              <a href="#" className="footer__social--image-wraper">
                <img src="icons/instagram.svg" alt="instagram logo" />
              </a>
            </li>
            <li>
              <a href="#" className="footer__social--image-wraper">
                <img src="icons/tiktok.svg" alt="tiktok logo" />
              </a>
            </li>
            <li>
              <a href="#" className="footer__social--image-wraper">
                <img src="icons/telegram.svg" alt="telegram logo" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content--bottom">
          <img src="icons/footer-logo.svg" alt="logo" className="footer__big-logo" />
        </div>
      </div>
    </footer>
  );
}
