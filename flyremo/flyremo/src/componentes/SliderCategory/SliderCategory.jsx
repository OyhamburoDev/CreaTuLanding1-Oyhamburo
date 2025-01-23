import React from "react";
import "./SliderCategory.css";
import { Link } from "react-router-dom";

const SliderCategory = ({ categorias, onClose }) => {
  return (
    <div className="cnt-slidercategory">
      {categorias.map((e) => {
        return (
          <Link key={e.id} to={`/categoria/${e.id}`}>
            {e.nombre}
          </Link>
        );
      })}
    </div>
  );
};

export default SliderCategory;
