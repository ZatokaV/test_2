import styles from "./page.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__banner">
          <img
            src="images/hero.png"
            alt="women in black dress"
            className="hero__image"
          />
          <div className="hero__button-wrapper">
            <button className="hero__button" type="button">
              NEW ARRIVALS
            </button>
          </div>
        </div>
      </section>

      <section className="collections">
        <ul className="collections__grid">
          <li className="collections__item collections__item--tall">
            <a href="#" className="collections__link">
              <img
                src="images/collections_1.png"
                alt="woman in a black shirt"
                className="collections__image"
              />
              <h3>CLASSICS BASICS</h3>
              <p>Classic style collection - great for workdays</p>
            </a>
          </li>

          <li className="collections__item">
            <a href="#" className="collections__link">
              <img
                src="images/collections_3.png"
                alt="woman in a white dress"
                className="collections__image"
              />
              <h3>SPORT BADDIE</h3>
              <p>Sportie style collection - for gym supremacy</p>
            </a>
          </li>

          <li className="collections__item collections__item--tall">
            <a href="#" className="collections__link">
              <img
                src="images/collections_5.png"
                alt="a woman in a swimsuit"
                className="collections__image"
              />
              <h3>SWIM SWIM</h3>
              <p>Summer style collection - for holidays u deserved</p>
            </a>
          </li>

          <li className="collections__item">
            <a href="#" className="collections__link">
              <img
                src="images/collections_2.png"
                alt="woman in a white skirt"
                className="collections__image"
              />
              <h3>CASUAL CHIC</h3>
              <p>Casual style collection - for everyday fashion</p>
            </a>
          </li>

          <li className="collections__item collections__item--tall">
            <a href="#" className="collections__link">
              <img
                src="images/collections_4.png"
                alt="woman in an elegant shirt"
                className="collections__image"
              />
              <h3>ELEGANT EVENNING</h3>
              <p>Elegant style collection - for loving evenings</p>
            </a>
          </li>

          <li className="collections__item">
            <a href="#" className="collections__link">
              <img
                src="images/collections_6.png"
                alt="woman in a black jacket"
                className="collections__image"
              />
              <h3>VIEW ALL COLLECTIONS</h3>
              <p>All styles we have - always here for u</p>
            </a>
          </li>
        </ul>
      </section>

      <section className="sale">
        <div className="sale__content">
          <img
            src="images/sale.png"
            alt="woman in a brown dress"
            className="sale__content--image"
          />
          <div className="sale__button--wrapper">
            <button className="sale__content--button" type="button">
              SALE UP TO 30%
            </button>
          </div>
        </div>
      </section>

      <section className="bestsellers">
        <h2 className="bestsellers__title">BESTSELLERS</h2>

        <div className="bestsellers__roundabout--wrapper">
          <button className="bestsellers__roundabout--left-btn">
            <div className="roundabout__btn--wrapper">
              <img src="icons/corner-left.svg" alt="left" />
            </div>
          </button>

          <ul className="bestsellers__roundabout">
            <li className="bestsellers__roundabout--item">
              <a href="#">
                <div className="roundabout__image--wrapper">
                  <img
                    src="images/best-1.png"
                    alt="women"
                    className="roundabout__image"
                  />
                </div>

                <h3 className="roundabout__item--title">LOREM IPSUM</h3>

                <p className="roundabout__item--description">
                  Lorem ipsum Dolores
                </p>

                <span className="roundabout__item--price">5 200 €</span>
              </a>
            </li>

            <li className="bestsellers__roundabout--item">
              <a href="#">
                <div className="roundabout__image--wrapper">
                  <img
                    src="images/best-2.png"
                    alt="women"
                    className="roundabout__image"
                  />
                </div>

                <h3 className="roundabout__item--title">LOREM IPSUM</h3>

                <p className="roundabout__item--description">
                  Lorem ipsum Dolores
                </p>

                <span className="roundabout__item--price">5 200 €</span>
              </a>
            </li>

            <li className="bestsellers__roundabout--item">
              <a href="#">
                <div className="roundabout__image--wrapper">
                  <img
                    src="images/best-3.png"
                    alt="women"
                    className="roundabout__image"
                  />
                </div>

                <h3 className="roundabout__item--title">LOREM IPSUM</h3>

                <p className="roundabout__item--description">
                  Lorem ipsum Dolores
                </p>

                <span className="roundabout__item--price">5 200 €</span>
              </a>
            </li>
          </ul>

          <button className="bestsellers__roundabout--right-btn">
            <div className="roundabout__btn--wrapper">
              <img src="icons/corner-right.svg" alt="right" />
            </div>
          </button>
        </div>
        <div className="bestsellers__roundabout--slider">
          <img src="icons/slider.svg" alt="slider" />
        </div>
      </section>
    </main>
  );
}
