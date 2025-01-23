import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx";
import Home from "./componentes/Pages/Home.jsx";
import Error404 from "./componentes/Pages/Error404.jsx";

function App() {
  return (
    <Router basename="/CreaTuLanding1-Oyhamburo/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
