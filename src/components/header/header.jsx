import styles from "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a href="/">
          <div className="header__logo">
            <img src="icons/logo.svg" alt="site logo" />
          </div>
        </a>
        <button className="header__burger--btn" type="button">
          <div className="header__burger">
            <label class="burger">
              <input type="checkbox" class="burger__checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </button>
        <nav className="header__navbar">
          <ul className="header__navbar--list">
            <li>catalog</li>
            <li>about us</li>
            <li>contacts</li>
          </ul>
        </nav>
        <div className="header__actions">
          <ul className="header__actions--list">
            <li>
              <div className="header__actions--img-vraper">
                <img src="icons/star-fool.svg" alt="favorit icon" />
              </div>
            </li>
            <li>
              <div className="header__actions--img-vraper">
                <img src="icons/buscket.svg" alt="buscket icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
