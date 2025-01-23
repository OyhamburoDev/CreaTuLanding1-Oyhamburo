import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, img }) => {
  return (
    <div className="cnt-item">
      <img className="img-item" src={img} alt={title}></img>
      <h2 className="title-item">{title}</h2>
      <p className="price-item">${price}</p>
      <Link to={`/detalles/${id}`} className="link-item">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
