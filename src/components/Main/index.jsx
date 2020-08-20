import React from "react";
import Card from "../Card";
import "./style.css";

const Main = ({ data = [] }) => {
  return (
    <div className="main-container">
      <div className="main-shadow" />
      <div className="main-wrapper">
        <h1 className="main-title">Ты сегодня покормил кота?</h1>
        <div className="card-container">
          {data.map((el, i) => (
            <Card data={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
