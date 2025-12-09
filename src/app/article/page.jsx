import styles from "./article.css";

export default function ArticlePage() {
  return (
    <main>
      <section className="article__top">
        <div className="article__top--left">
          <div className="article__top--photo-row">
            <div className="photo__row--vertikal">
              <img src="images/article_1.png" alt="article-photo" />
            </div>
            <div className="photo__row--vertikal">
              <img src="images/article_2.png" alt="article-photo" />
            </div>
          </div>
          <div className="article__top--photo-single">
            <div className="photo__single--horizontal">
              <img src="images/article_3.png" alt="article-photo" />
            </div>
          </div>
          <div className="article__top--photo-row">
            <div className="photo__row--vertikal">
              <img src="images/article_4.png" alt="article-photo" />
            </div>
            <div className="photo__row--vertikal">
              <img src="images/article_5.png" alt="article-photo" />
            </div>
          </div>
        </div>

        <div className="article__top--right">
          <div className="article__top--card">
            <p className="article__card--sub-title">SPORT BADDIE</p>
            <div className="article__top--card-row">
              <h2 className="article__card--title">
                Шорти-бермуди зі складками та вмістом льону
              </h2>
              <p className="article__card--price">22,99 €</p>
            </div>
            <p className="article__card--article-code">ART. 1234350-46</p>
          </div>
          <div className="article__card--colors">
            <div class="article__card--color">
              <span class="article__card--dot black_dot"></span>
              <span class="article__card--text">BLACK</span>
            </div>

            <div class="article__card--color">
              <span class="article__card--dot milk_dot"></span>
              <span class="article__card--text">MILK</span>
            </div>
          </div>

          <div className="article__card--sizes">
            <div className="article__card--sizes-left">
              <span className="article__card--sizes-txt">SIZE:</span>
              <div className="article__card--btns">
                <button className="size__button">S</button>
                <button className="size__button">M</button>
              </div>
            </div>
            <a href="#">РОЗМІРНА СІТКА</a>
          </div>
          <div className="article__card--status">
            <span className="status__dot"></span>
            <p className="status__text">В НАЯВНОСТІ</p>
          </div>
          <div className="article__card--delivery-term">
            <p>ОРІЄНТОВНИЙ ЧАС ДОСТАВКИ: 3-5 РОБОЧИХ ДНІВ</p>
          </div>

          <div className="article__card--to-bue">
            <button className="to-bue__button">ДОДАТИ В КОШИК</button>
            <div>
              <img src="icons/star.svg" alt="favorite" />
            </div>
          </div>

          <div className="article__card--info">
            <details>
              <summary>ДЕТАЛЬНІШЕ</summary>
              <div class="article__card--info-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet magna scelerisque, vulputate tellus et, tristique
                libero. Cras rhoncus bibendum ultrices. Fusce tellus enim,
                efficitur nec auctor sed, faucibus at tortor. Praesent feugiat
                semper hendrerit. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. 
              </div>
            </details>

            <details>
              <summary>СКЛАД</summary>
              <div class="article__card--info-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet magna scelerisque, vulputate tellus et, tristique
                libero. Cras rhoncus bibendum ultrices. Fusce tellus enim,
                efficitur nec auctor sed, faucibus at tortor. Praesent feugiat
                semper hendrerit. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. 
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
