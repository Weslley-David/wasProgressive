import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  //user propriedades
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);

  //card propriedades
  const [newTitle, setNewTitle] = useState("");
  const [newDetail, setNewDetail] = useState("");
  const [newTerm, setNewTerm] = useState("");
  const [newColumn, setNewColumn] = useState("");
  const [cards, setCard] = useState([]);

  //column propriedades
  const [newColumnName, setNewColumnName] = useState("");
  const [newFrameName, setNewFrame] = useState("");
  const [columns, setColumn] = useState([]);

  //entidades
  const usersCollectionRef = collection(db, "users");
  const cardCollectionRef = collection(db, "card");
  const columnCollectionRef = collection(db, "column");


  //métodos de criação

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const createCard = async () => {
    await addDoc(cardCollectionRef, { column: newColumn, detail: newDetail, term: newTerm, title: newTitle });
  };

  const createColumn = async () => {
    await addDoc(columnCollectionRef, { columnName: newColumnName, frameName: newFrameName });
  };

  //métodos de deleção
  /*const deleteColumn = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };*/

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const deleteCard = async (id) => {
    const cardDoc = doc(db, "card", id);
    await deleteDoc(cardDoc);
  };

  const deleteColumn = async (id) => {
    const columnDoc = doc(db, "column", id);
    await deleteDoc(columnDoc);
  };


  //user
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);


  //Card
  useEffect(() => {
    const getCard = async () => {
      const data = await getDocs(cardCollectionRef);
      setCard(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCard();
  }, []);

  //column
  useEffect(() => {
    const getColumn = async () => {
      const data = await getDocs(columnCollectionRef);
      setColumn(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getColumn();
  }, []);

  /*---------------------------------------------------------*/

  return (
    <div className="App">
      {/*user*/}
      <h3>User</h3>
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>

      {/*Card*/}
      <h3>Card</h3>
      <input
        placeholder="Title..."
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      />
      <input
        placeholder="Detail..."
        onChange={(event) => {
          setNewDetail(event.target.value);
        }}
      />
      <input
        placeholder="Term..."
        onChange={(event) => {
          setNewTerm(event.target.value);
        }}
      />
      <input
        placeholder="Column..."
        onChange={(event) => {
          setNewColumn(event.target.value);
        }}
      />
      <button onClick={createCard}>cadastrar tarefa</button>


      {/*Column*/}
      <br></br>
      <h3>Column</h3>
      <input
        placeholder="Columnname..."
        onChange={(event) => {
          setNewColumnName(event.target.value);
        }}
      />
      <input
        placeholder="frame..."
        onChange={(event) => {
          setNewFrame(event.target.value);
        }}
      />
      <button onClick={createColumn}>cadastrar coluna</button>



      {
        //---------------------------------------------------------------------------------
        users.map((user) => {
          return (
            <div className="usershow">
              {" "}
              <h1>id: {user.id}</h1>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                {" "}
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {" "}
                Delete User
              </button>
            </div>
          );
        })}
      <br></br>
      {
        //---------------------------------------------------------------------------------
        cards.map((card) => {
          return (
            <div className="cardshow">
              {" "}
              <h1>id: {card.id}</h1>
              <h1>id: {card.detail}</h1>
              <h1>id: {card.title}</h1>
              <button
                onClick={() => {
                  deleteCard(card.id);
                }}
              >
                {" "}
                Delete Card
              </button>
            </div>
          );
        })}

      {
        //---------------------------------------------------------------------------------
        columns.map((column) => {
          return (
            <div className="columnshow">
              {" "}
              <h1>id: {column.id}</h1>
              <h1>id: {column.frameName}</h1>
              <h1>id: {column.collumnName}</h1>
              <button
                onClick={() => {
                  deleteColumn(column.id);
                }}
              >
                {" "}
                Delete Column
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
