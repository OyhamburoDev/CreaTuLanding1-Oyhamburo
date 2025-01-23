import { elegirProducto } from "../../../asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.jsx";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const idNumerito = parseInt(id);
    elegirProducto(idNumerito)
      .then((data) => {
        setDetalles(data);
      })
      .catch((error) => {
        console.log("Error en elegirProducto:", error);
      });
  }, [id]);

  return (
    <div className="cnt-item-detail-container">
      {detalles ? (
        <ItemDetail detalles={detalles} />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
