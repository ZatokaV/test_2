import "./about.css";

export default function AboutUs() {
  return (
    <main>
      <section className="about-us">
        <div className="about-us__top">
          <h1 className="about-us__top--title">About us</h1>
          <p className="about-us__top--text">
            Liberty — це свобода, якої жадає кожна з нас. Свобода бути різною,
            бути особливою, бути собою.
          </p>
        </div>
      </section>

      <section className="history">
        <div className="history__content">
          <div className="history__content--left">
            <h2 className="history__title">HOW IT STARTED</h2>
          </div>
          <div className="history__content--right">
            <ul className="history__list">
              <li>
                <p className="history__text">
                  Здається символічним те, що напочатку локдауну, коли ми всі
                  стикнулися з невідомістю та суворими обмеженнями, народився
                  український бренд жіночого одягу LIBERTY ALL I NEED.
                </p>
              </li>
              <li>
                <p className="history__text">
                  Почавши свою історію, як онлайн-магазин, згодом завдяки довірі
                  та підтримці пошановувачів нашого бренду, ми відкрили свій
                  перший оффлайн-шоурум в центрі Варшави.
                </p>
              </li>
              <li>
                <p className="history__text">
                  Спершу ми планували створити свій простір в рідній Одесі, але
                  на наше рішення вплинула війна та постійна небезпека.
                </p>
              </li>
              <li>
                <p className="history__text">
                  Проте ми з нетерпінням чекаємо та віримо, що настануть мирні
                  часи, коли ми зможемо відкрити двері не одного нашого шоуруму
                  саме в Україні.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="about-us__center-image">
          <img src="/images/about_centr.png" alt="people" />
        </div>
      </section>

      <section className="ideology">
        <div className="ideology__content">
          <div className="ideology__content--left">
            <h2 className="ideology__title">OUR IDEOLOGY</h2>
          </div>
          <div className="ideology__content--right">
            <ul className="ideology__list">
              <li>
                <p className="ideology__text">
                  Всі наші речі створюються на власному виробництві, яке
                  розташоване в Одесі. Це гарантує увагу та контроль за якістю
                  кожної одиниці одягу.
                </p>
              </li>
              <li>
                <p className="ideology__text">
                  Мета нашого бренду полягає в тому, щоб створити та доповнити
                  ваші стильні аутфіти, стати інструментом для самовираження,
                  підкреслити індивідуальність та красу кожної, хто обирає
                  Liberty.
                </p>
              </li>
              <li>
                <p className="ideology__text">
                  Особливістю бренду є те, що всі наші речі гармонійно
                  поєднуються між собою та формують безліч різних образів в
                  залежності від того, на чому ви зробите акцент.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="quote__content">
          <p className="quote__text quote__text--open">
            Ми прагнемо створювати більше креативних, якісних, універсальних та
            стильних речей, щоб кожна з вас могла передати свій настрій,
            підкреслити свою неповторність і з легкістю підкорити увесь світ в
            образах від {" "}
            <span className="quote__text--name">LIBERTY ALL I NEED.</span>
          </p>
          <div>
            <p className="quote__content--sign">-- LIBERTY TEAM.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
