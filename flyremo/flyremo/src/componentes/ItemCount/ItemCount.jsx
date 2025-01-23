import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [countNum, setCountNum] = useState(1);

  const operacionResta = () => {
    if (countNum > 1) {
      setCountNum(countNum - 1);
    }
  };

  const operacionSuma = () => {
    if (countNum < 20) {
      setCountNum(countNum + 1);
    }
  };

  return (
    <>
      <div className="item-cnt">
        <button
          className="count-btn"
          onClick={operacionResta}
          disabled={countNum === 1}
        >
          -
        </button>
        <span className="count-num">{countNum}</span>
        <button className="count-btn" onClick={operacionSuma}>
          +
        </button>
        <button className="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
