"use client";
import styles from "./category-1.css";
import { useState } from "react";
import Item from "../../components/item/item";
import Form from "../../components/form/form";
import FiltersPanel from "../../components/filters/filters";

const fakeProducts = [
  {
    id: 1,
    title: "Шорти-бермуди зі складками та вмістом льону",
    price: 22.99,
    image: "/images/item_1.png",
    colors: ["#000000", "#F5F5DC"],
    discount: null,
  },
  {
    id: 2,
    title: "Сукня максі з відкритою спиною",
    price: 45.0,
    image: "/images/item_2.png",
    colors: ["#FFFFFF", "#000000"],
    discount: null,
  },
  {
    id: 3,
    title: "Топ бандо трикотажний базовий з декоративним вузлом",
    price: 18.5,
    oldPrice: 22.99,
    image: "/images/item_3.png",
    colors: ["#000000"],
    discount: "-20%",
  },
  {
    id: 4,
    title: "Сорочка оверсайз",
    price: 35.0,
    image: "/images/item_4.png",
    colors: ["#000000", "#FFFFFF", "#5D4037"],
    discount: null,
  },

  {
    id: 5,
    title: "Спідниця міні з розрізом",
    price: 25.0,
    oldPrice: 35.0,
    image: "/images/item_1.png",
    colors: ["#000000", "#808080"],
    discount: "-30%",
  },
  {
    id: 6,
    title: "Костюм льоняний літній (шорти + жилет)",
    price: 55.0,
    image: "/images/item_2.png",
    colors: ["#F5F5DC"],
    discount: null,
  },
  {
    id: 7,
    title: "Блейзер класичного крою",
    price: 49.99,
    oldPrice: 65.0,
    image: "/images/item_3.png",
    colors: ["#000000", "#191970"],
    discount: "-15%",
  },
  {
    id: 8,
    title: "Штани палаццо",
    price: 42.0,
    image: "/images/item_4.png",
    colors: ["#000000", "#FFFFFF"],
    discount: null,
  },

  {
    id: 9,
    title: "Сукня-комбінація шовкова",
    price: 89.0,
    image: "/images/item_1.png",
    colors: ["#000000", "#FF0000"],
    discount: null,
  },
  {
    id: 10,
    title: "Футболка базова бавовняна",
    price: 15.0,
    image: "/images/item_2.png",
    colors: ["#FFFFFF", "#000000", "#808080"],
    discount: null,
  },
  {
    id: 11,
    title: "Корсетний топ вечірній",
    price: 28.0,
    oldPrice: 40.0,
    image: "/images/item_3.png",
    colors: ["#000000"],
    discount: "-30%",
  },
  {
    id: 12,
    title: "Джинси прямого крою",
    price: 50.0,
    image: "/images/item_4.png",
    colors: ["#00008B", "#000000"],
    discount: null,
  },
];

export default function AboutPage() {
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  return (
    <main>
      <section className="hero">
        <div className="category__hero--content">
          <h2 className="category__hero--title">SPORT BADDIE</h2>
        </div>
      </section>

      <section className="catalog">
        <div className="catalog__top">
          <h3 className="catalog__title">SPORT BADDIE</h3>
          <div className="catalog__filters">
            <button
              className="catalog__filters--btn"
              type="button"
              onClick={toggleFilters}
            >
              <div className="catalog__filters--ico">
                <img src="/icons/filters.svg" alt="filters" />
              </div>
              <span className="catalog__filters--text">FILTERS</span>
            </button>
          </div>
        </div>
        {isFiltersVisible && (
          <div className="filters__overlay" onClick={toggleFilters}>
            <div
              className="filters__panel"
              onClick={(e) => e.stopPropagation()}
            >
              <FiltersPanel />
            </div>
          </div>
        )}
        <div className="catalog__grid">
          {fakeProducts.map((product) => (
            <Item
              key={product.id}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              discount={product.discount}
              colors={product.colors}
            />
          ))}
        </div>
      </section>

      <section className="subscribe">
        <Form />
      </section>
    </main>
  );
}
