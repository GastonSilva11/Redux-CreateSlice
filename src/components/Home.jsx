import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "./redux/ListSlice";
import { nanoid } from "@reduxjs/toolkit";
import randomColor from "randomcolor";
import { Link } from "react-router-dom";
import ShowModal from "./ShowModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const lists = useSelector((state) => state.lists);
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
  };

  return (
    <>
      <div>
        <h1>Listas Disponibles</h1>
        <hr />
        <button onClick={() => setShowModal(true)}>+</button>
        <ul>
          {lists.map((list) => (
            <li style={{ borderTop: "3px solid" + list.color }} key={list.id}>
              <Link to={`/${list.id}`}>
                {/* // con el link hacemos el nombre clickeable y nos lleve a la ruta
                // correspondiente de esa lista */}
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        {showModal && <ShowModal closeModal={() => setShowModal(false)} />}
      </div>
    </>
  );
}
export default Home;

//--------    ----------          ---------              --------------      -

//-------      -----------------            ---------------

//CODIGO LIMPIO SIN EL MODAL :

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createList } from "./redux/ListSlice";
// import { nanoid } from "@reduxjs/toolkit";
// import randomColor from "randomcolor";
// import { Link } from "react-router-dom";
// import ShowModal from "./ShowModal";

// function Home() {
//   const [show, setShow] = useState(false);
//   const close = () => setShow(false);
//   const open = () => setShow(true);

//   const lists = useSelector((state) => state.lists);
//   const [newListName, setNewListName] = useState("");

//   const dispatch = useDispatch();

//   const handleAddList = (e) => {
//     e.preventDefault();
//     dispatch(
//       createList({
//         id: nanoid(),
//         name: newListName,
//         color: randomColor(),
//         products: [],
//       })
//     );

//     setNewListName("");
//   };

//   return (
//     <>
//       <div>
//         Listas Disponibles
//         <hr />
//         <form action="" onSubmit={handleAddList}>
//           <label htmlFor="newList"> Nueva Lista : </label>
//           <input
//             type="text"
//             name="newList"
//             id="newList"
//             value={newListName}
//             onChange={(e) => setNewListName(e.target.value)}
//           />
//           <button>+</button>
//         </form>
//         <ul>
//           {lists.map((list) => (
//             <li style={{ borderTop: "3px solid" + list.color }} key={list.id}>
//               <Link to={`/${list.id}`}>
//                 {/* // con el link hacemos el nombre clickeable y nos lleve a la ruta
//                 // correspondiente de esa lista */}
//                 {list.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
// export default Home;
