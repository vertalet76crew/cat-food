import React, { useState } from "react";
import "./style.css";

const Card = ({ data = [] }) => {
  const { messageSelected, messageDefault, messageDisabled } = data;
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const selectedHandler = () => setSelected(!selected);

  const setColorTextState = () => {
    if (data.quantity <= 0) {
      return { color: "#B3B3B3", text: messageDisabled };
    }
    if (hover) {
      if (selected) {
        return { color: "#E62E7A", text: messageSelected };
      }
      return { color: "#2EA8E6", text: messageDefault };
    }
    if (selected && !hover) {
      return { color: "#D91667", text: messageSelected };
    }
    return { color: "#1698D9", text: messageDefault };
  };
  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  return (
    <>
      <div className="card-wrapper">
        <div
          className="card-border"
          style={{
            backgroundColor: setColorTextState().color,
          }}
        >
          <div
            className={`card ${data.quantity <= 0 && "card--disabled"}`}
            onClick={selectedHandler}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="card-content">
              {!selected || data.quantity <= 0 ? (
                <a href="#" className="card-name">
                  Сказочное заморское яство
                </a>
              ) : (
                <a href="#" className="card-name card-name--pink">
                  Котэ не одобряет?
                </a>
              )}

              <h2 className="card-title">{data.title}</h2>
              <span className="card-taste">{data.taste}</span>
              <span className="card-portions">
                <strong>{data.portions}</strong> порций
              </span>
              <div className="card-gift">
                {data.gift > 1 && <strong>{data.gift}</strong>}
                {declOfNum(+data.gift, ["мышь", "мыши", "мышей"])} в подарок
              </div>
              {data.isHappy && (
                <div className="card-gift">заказчик доволен</div>
              )}

              <div className="card-img" />
              <div
                className="weight-container"
                style={{ backgroundColor: setColorTextState().color }}
              >
                <div className="weight-text weight-text--value">
                  {data.weight}
                </div>
                <div className="weight-text">кг</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`card-description ${
            data.quantity <= 0 && "card-description--disabled"
          }`}
        >
          {selected || data.quantity <= 0 ? (
            setColorTextState().text
          ) : (
            <>
              {`${setColorTextState().text}`}
              <a
                href="#"
                class="link"
                onClick={(e) => {
                  e.preventDefault();
                  selectedHandler();
                }}
              >
                Купи
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
