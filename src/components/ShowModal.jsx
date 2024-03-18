import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "./redux/ListSlice";
import { nanoid } from "@reduxjs/toolkit";
import randomColor from "randomcolor";

function ShowModal({ closeModal }) {
  const [newListName, setNewListName] = useState("");
  const dispatch = useDispatch();

  const handleAddList = (e) => {
    e.preventDefault();
    dispatch(
      createList({
        id: nanoid(),
        name: newListName,
        color: randomColor(),
        products: [],
      })
    );
    setNewListName("");
    closeModal();
  };
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        border: "solid 1px orange",
      }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h2>Agregar nueva lista</h2>
          <form onSubmit={handleAddList}>
            <label htmlFor="newListName">Nombre de la lista:</label>
            <input
              type="text"
              id="newListName"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <button type="submit">Agregar</button>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function StaticExample() {

// }

// export default StaticExample;

export default ShowModal;
