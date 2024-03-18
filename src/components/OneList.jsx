import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addItemToList, removeItemFromList } from "./redux/ListSlice";
import { nanoid } from "@reduxjs/toolkit";

function OneList() {
  const [newProductName, setNewProductName] = useState();
  const { listId } = useParams(); //nos quedamos con el ID de la URL
  const list = useSelector((state) => state.lists.find((l) => l.id === listId)); //aca nos trae todas las listas, pero queremos 1 sola lista, entonces usamos el find al final
  const dispatch = useDispatch();

  const handleDeleteProduct = (productId) => {
    dispatch(removeItemFromList({ listId, productId }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(
      addItemToList({
        //accion que estamos llamando a traves del dispatch.
        listId: listId,
        product: { id: nanoid(), name: newProductName, isBought: false },
      })
    );
    setNewProductName(""); //esto es para que quede el INPUT vacio luego de que se agregue el producto
  };

  return (
    <div>
      <h1>{list.name}</h1>
      <hr />

      <form action="" onSubmit={handleAddProduct}>
        <label htmlFor="newProduct"> Nuevo Producto: </label>
        <input
          type="text"
          name="newProduct"
          id="newProduct"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button>+</button>
      </form>
      {list.products.map((product) => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => handleDeleteProduct(product.id)}>x</button>
        </li>
      ))}
      <hr />
      <Link to={"/"}>Volver</Link>
    </div>
  );
}

export default OneList;
