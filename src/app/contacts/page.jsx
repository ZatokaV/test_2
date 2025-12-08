import "./contacts.css";

export default function ContactsPage() {
  return (
    <main className="contacts-page">
      <div className="content">
        <div className="contacts__page--top">
          <a href="/">
            <div className="contacts-page__logo">
              <img src="icons/logo.svg" alt="site logo" />
            </div>
          </a>

          <nav className="contacts-page__navbar">
            <ul className="contacts-page__navbar--list">
              <li>
                <a href="/category-all">catalog</a>
              </li>
              <li>
                <a href="/about-us">about us</a>
              </li>
              <li>
                <a href="/contacts">contacts</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="contacts__main--info">
          <div className="contacts__main--left ">
            <h1 className="contacts__title">Contacts</h1>
            <p className="contacts__main--text">
              for any questions or just to say hello, feel free to contact us or
              pay a visit.
            </p>
          </div>
          <div className="contacts__main--right">
            <address>
              <p className="contacts__sub-title">our email</p>
              <a className="contacts__data" href="mailto:EXAMPLE@GMAIL.COM" >EXAMPLE@GMAIL.COM</a>
              <p className="contacts__sub-title">our address</p>
              <p className="contacts__data">WILCA 44, WARSAW, POLAND</p>
            </address>
            <p className="contacts__sub-title">our  socials</p>
            <ul className="contacts__social">
              <li><a href="#"><img src="icons/instagram_black.svg" alt="icon" /></a></li>
              <li><a href="#"><img src="icons/tiktok_black.svg" alt="icon" /></a></li>
              <li><a href="#"><img src="icons/telegram_black.svg" alt="icon" /></a></li>
              <li><a href="#"><img src="icons/facebook_black.svg" alt="icon" /></a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </main>
  );
}
