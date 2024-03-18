import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const ListSlice = createSlice({
  name: "lists",
  initialState: initialState,
  reducers: {
    //CREAR NUEVA LISTA
    createList(state, action) {
      state.push(action.payload);
    },

    //AGREGAR PRODUCTO A LISTA
    addItemToList(state, action) {
      const selectedList = state.find(
        (list) => list.id === action.payload.listId
      ); //esto encontrará la lista que viene del payload

      selectedList.products.push(action.payload.product); //aqui a su propiedad products, agregamos el producto que viene del payload
    },

    //ELIMINAR UNA LISTA
    removeItemFromList(state, action) {
      const { productId, listId } = action.payload; //desestructuramos el payload, y tenemos el payload en productId y
      //Aqui buscamos la lista (como en el add) y luego le guardo a esa lista un array sin el elemento que quiero eliminar, con un filter, accediendo al id del producto seleccionado
      const selectedList = state.find((list) => list.id === listId);
      selectedList.products = selectedList.products.filter(
        (p) => p.id !== productId
      );
    },
  },
});

const { reducer, actions } = ListSlice; // desestructuramos tasksSlice

export const { createList, addItemToList, removeItemFromList } = actions; // desestructuramos actions y las exportamos

export default reducer; //exportamos el reducer como default
