import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="logo-titulo">
          <img
            className="foto-logo"
            src="./public/foto-logo.jpg"
            alt="iamgen del logo de la página"
          />
          <h1 className="titulo-huno">FlyRemo</h1>
        </div>
        <nav className="nav-header">
          <ul>
            <li>Destinos</li>
            <li>Experiencias</li>
            <li>Reservas</li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;
