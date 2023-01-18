import { useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./uploadif.css";


function Parceiros() {
  const [newName, setNewName] = useState("");
  const [newlinkname, setNewLinkName] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, linkname: newlinkname });

  };

  const updateUser = async (id, linkname) => {
    const userDoc = doc(db, "users", id);
    const newFields = { linkname: newlinkname };
    await updateDoc(userDoc, newFields);
    
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);



  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="Link..."
        onChange={(event) => {
          setNewLinkName(event.target.value);
        }}
      />

      <button onClick={createUser}> Criar Link Parceiro </button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Nome: {user.name}</h1>
            <h1 >{user.linkname}</h1>

            <input
           placeholder="Novo Link..."
           onChange={(event) => {
             setNewLinkName(event.target.value);
           }}></input>

            <button
              onClick={() => {
                updateUser(user.id, user.linkname);
                <Link to="/Parceiros"></Link>
              }}
            >
              {" "} Alterar Link  </button>




            <button
              onClick={() => {
                deleteUser(user.id);
                
              }}
              
            >
              {" "}
              Deletar Post
              
            </button>
          

           
           </div>
        );
      })}

      <h2 className="one"> para acessar o Video copie e cole no navegador</h2>
    </div>
  );
}

export default Parceiros;