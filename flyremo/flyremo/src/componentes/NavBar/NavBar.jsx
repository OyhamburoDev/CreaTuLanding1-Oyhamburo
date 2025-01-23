import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SliderCategory from "../SliderCategory/SliderCategory";

const categorias = [
  { id: 1, nombre: "Remeras" },
  { id: 2, nombre: "Gorras" },
  { id: 3, nombre: "Shorts" },
  { id: 4, nombre: "Jeans" },
  { id: 5, nombre: "Calzado" },
];

const NavBar = () => {
  const [showSlider, setShowSlider] = useState(false);

  const passMouseEnter = () => {
    setShowSlider(true);
  };

  const passMouseOut = () => {
    setShowSlider(false);
  };

  return (
    <>
      <header>
        <div className="logo-titulo">
          <img
            className="foto-logo"
            src="./public/foto-logo.jpg"
            alt="imagen del logo de la página"
          />
          <h1 className="titulo-navbar">UrbanEase</h1>
        </div>
        <nav className="nav-header">
          <ul>
            <li>
              <Link className="link-home" to="/">
                Home
              </Link>
            </li>
            <li
              onMouseEnter={passMouseEnter}
              onMouseLeave={passMouseOut}
              className="link-categorias-container"
            >
              <span className="link-categorias">Categorías</span>
              {showSlider && <SliderCategory categorias={categorias} />}
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;
