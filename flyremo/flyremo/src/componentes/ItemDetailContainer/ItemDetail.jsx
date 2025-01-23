import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ detalles }) => {
  return (
    <div className="cnt-item-detail">
      <div className="cnt-img">
        <img
          className="img-item-detail"
          src={detalles.img}
          alt={detalles.title}
        />
      </div>
      <div className="cnt-title-price">
        <h2 className="title-item-detail">Nombre: {detalles.title}</h2>
        <h3 className="price-item-detail">Precio: {detalles.price}</h3>
        <p className="p-item-detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          ratione error ipsam ab fugit quaerat eius iusto odit nihil pariatur
          nostrum dolores amet ducimus, dolor eveniet exercitationem totam
          architecto.
        </p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
