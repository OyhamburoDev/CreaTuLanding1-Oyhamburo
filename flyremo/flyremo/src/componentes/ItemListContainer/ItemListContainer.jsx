import React from "react"; // Esto es necesario
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProductos } from "../../../asyncMock.js";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = React.memo(() => {
  const { id } = useParams();
  console.log(id);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((respuesta) => {
        const categoriaEncontrada = respuesta.filter(
          (prod) => prod.categoria === Number(id)
        );
        console.log("resultado:", categoriaEncontrada);
        setProductos(categoriaEncontrada);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <main>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <p className="p-loading">Cargando categoria seleccionada...</p>
        )}
      </main>
    </>
  );
});

export default ItemListContainer;
