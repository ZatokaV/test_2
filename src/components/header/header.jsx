import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <input type="checkbox" id="burger-toggle" className="burger__checkbox" />

      <div className="header__content">
        <a href="/">
          <div className="header__logo">
            <img src="icons/logo.svg" alt="site logo" />
          </div>
        </a>

        <label htmlFor="burger-toggle" className="header__burger--btn">
          <div className="header__burger">
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </label>

        <nav className="header__navbar">
          <ul className="header__navbar--list">
            <a href="/category-all">
              <li>catalog</li>
            </a>
            <a href="/about-us">
              <li>about us</li>
            </a>
            <a href="#">
              <li>contacts</li>
            </a>
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

      <nav className="mobile-menu">
        <ul className="mobile-menu__list">
          <a href="/category-all">
            <li>catalog</li>
          </a>
          <a href="/about-us">
            <li>about us</li>
          </a>
          <a href="#">
            <li>contacts</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
