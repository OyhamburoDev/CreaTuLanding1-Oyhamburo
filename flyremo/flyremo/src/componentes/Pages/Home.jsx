import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bannerFoto from "../../../public/banner-foto.jpg";

const categorias = [
  { id: 1, nombre: "Remeras" },
  { id: 2, nombre: "Gorras" },
  { id: 3, nombre: "Shorts" },
  { id: 4, nombre: "Jeans" },
  { id: 5, nombre: "Calzado" },
];

const Home = () => {
  return (
    <>
      <div className="banner-home">
        <img src={bannerFoto} alt="Banner Promocional" />
      </div>
      <div className="title-p-home">
        <h2 className="title-home">
          ¡Bienvenidos a tu tienda favorita de ropa!
        </h2>
        <p className="p-home">
          Tu tienda online de ropa urbana, donde encuentras lo mejor en estilo y
          confort. ¡Explora nuestras categorías y encuentra tus productos
          favoritos!
        </p>
      </div>
      <div className="cnt-categorias">
        {categorias.map((e) => {
          return (
            <div key={e.id} className="ctn-card-categoria">
              <h3 className="title-card-categoria">{e.nombre}</h3>
              <Link to={`/categoria/${e.id}`} className="categoria-link">
                Ver más
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
