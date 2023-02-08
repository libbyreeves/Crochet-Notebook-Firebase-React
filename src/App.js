import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import NoteAdd from "./components/NoteAdd";
import Notebook from "./components/Notebook";
import "./App.css";

//connection to firebase

const firebaseConfig = {

apiKey: "AIzaSyCw7NM3T1rbGcHjVepc_ISdLwfpQfNDCRs",

authDomain: "crochet-notebook.firebaseapp.com",

projectId: "crochet-notebook",

storageBucket: "crochet-notebook.appspot.com",

messagingSenderId: "855179883086",

appId: "1:855179883086:web:b289320d2bd4d11173491f"

};
firebase.initializeApp(firebaseConfig);
//

//function for updating the notebook to firebase
const App = () => {
  const [noteBookData, setNoteBookData] = useState([]);

  const updateNotes = () => {
    firebase
      .database()
      .ref("notebook")
      .on("child_added", (snapshot) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          yarn: snapshot.val().yarn,
          description: snapshot.val().description,
          hook: snapshot.val().hook,
          weight: snapshot.val().weight

        };
        let notebook = noteBookData;
        notebook.push(note);
        setNoteBookData([...noteBookData]);
      });

    firebase
      .database()
      .ref("notebook")
      .on("child_removed", (snapshot) => {
        let notebook = noteBookData;
        notebook = noteBookData.filter((note) => note.id !== snapshot.key);
        setNoteBookData(notebook);
      });
  };

  useEffect(() => {
    updateNotes();
  }, []);

  //what is rendered on the page

  return (
    <div className="app">
      
      <NavBar />
      <div className="note-section">
        <NoteAdd />      
        <Notebook notebook={noteBookData} />
      </div>
    </div>
  );
};

export default App;
