"use client";
import { useState } from "react";

import styles from "./page.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const handleSend = () => {
    setEmail("");
    alert("Done!");
  };

  return (
    <main>
      <section className="hero">
        <div className="hero__banner">
          <picture>
            <source
              media="(max-width: 1200px)"
              srcSet="/images/tablet_hero.png"
            />

            <img
              src="/images/hero.png"
              alt="woman"
              className="hero__image"
            />
          </picture>

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
              <p className="collections__item--description">
                Classic style collection - <br className="tablet-break" />
                great for workdays
              </p>
            </a>
          </li>

          <li className="collections__item">
            <a href="#" className="collections__link">
              <img
                src="images/collections_3.png"
                alt="woman in a white dress"
                className="collections__image"
              />
              <br className="tablet-break" /> <h3>SPORT BADDIE</h3>
              <p className="collections__item--description">
                Sportie style collection - <br className="tablet-break" />
                for gym supremacy
              </p>
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
              <p className="collections__item--description">
                Summer style collection - <br className="tablet-break" />
                for holidays u deserved
              </p>
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
              <p className="collections__item--description">
                Casual style collection - <br className="tablet-break" />
                for everyday fashion
              </p>
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
              <p className="collections__item--description">
                Elegant style collection - <br className="tablet-break" />
                for loving evenings
              </p>
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
              <p className="collections__item--description">
                All styles we have - <br className="tablet-break" />
                always here for u
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section className="sale">
        <div className="sale__content">
          <picture>
            <source 
            media="(max-width: 1200px)"
            srcSet="images/tablet_sale.jpg"
            />
          <img
            src="images/sale.png"
            alt="woman"
            className="sale__content--image"
          />
          </picture>
          <div className="sale__button--wrapper">
            <button className="sale__content--button" type="button">
              SALE UP TO 30%
            </button>
          </div>
        </div>
      </section>

      <section className="bestsellers">
        <h2 className="bestsellers__title el__dsctp-only">BESTSELLERS</h2>

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

            <li className="bestsellers__roundabout--item el__dsctp-only">
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

      <section className="subscribe">
        <div className="subscribe__content">
          <h3 className="subscribe__title">SUBSCRIBE TO NEWS & SALES</h3>
          <input
            type="text"
            placeholder="YOUR E-MAIL*"
            className="subscribe__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="subscribe__policy">
            *I GIVE MY CONSENT FOR A&nbsp;
            <a href="#" className="subscribe__policy--link">
              PRIVACY SETTINGS.
            </a>
          </p>
          <button
            type="button"
            className="subscribe__policy--btn"
            onClick={handleSend}
          >
            SEND
          </button>
        </div>
      </section>
    </main>
  );
}
