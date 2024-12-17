import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header>
        <h1>FlyRemo</h1>
        <nav>
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
