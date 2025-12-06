import styles from "./filters.css";

export default function FiltersPanel() {
  return (
    <aside className="filters__panel">
      <form>
        <fieldset className="filters__panel--color">
          <legend className="filters__title">По кольору</legend>

          <label className="filters__color-option">
            <input
              type="radio"
              name="color"
              value="white"
              className="filters__color-input"
            />
            <span className="filters__color-circle filters__color--white"></span>
            БІЛИЙ
          </label>

          <label className="filters__color-option">
            <input
              type="radio"
              name="color"
              value="gray"
              className="filters__color-input"
            />
            <span className="filters__color-circle filters__color--gray"></span>
            СІРИЙ
          </label>

          <label className="filters__color-option">
            <input
              type="radio"
              name="color"
              value="black"
              className="filters__color-input"
            />
            <span className="filters__color-circle filters__color--black"></span>
            ЧОРНИЙ
          </label>

          <label className="filters__color-option">
            <input
              type="radio"
              name="color"
              value="red"
              className="filters__color-input"
            />
            <span className="filters__color-circle filters__color--red"></span>
            ЧЕРВОНИЙ
          </label>
        </fieldset>

        <fieldset className="filters__panel--material">
          <legend className="filters__title">По матеріалу</legend>
          <button type="button">LOREM IPSUM</button>
          <button type="button">Dolores</button>
          <button type="button">LOREM IPSUM</button>
          <button type="button">Dolores</button>
          <button type="button">LOREM IPSUM</button>
          <button type="button">Dolores</button>
          <button type="button">LOREM IPSUM</button>
        </fieldset>

        <fieldset className="filters__panel--size">
          <legend className="filters__title">По розміру</legend>
          <button type="button">ONESIZE</button>
          <button type="button">OVERSIZE</button>
        </fieldset>

        <fieldset className="filters__panel--price">
          <legend className="filters__title filters__title_last">По ціні</legend>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            className="filters__price-range"
          />
          <div className="filters__price-values">
            <span className="filters__price-min">0</span>
            <span className="filters__price-max">100000</span>
          </div>
        </fieldset>
      </form>
    </aside>
  );
}
