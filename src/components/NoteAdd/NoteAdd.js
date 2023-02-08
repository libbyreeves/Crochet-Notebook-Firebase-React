import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./NoteAdd.css";



const NoteAdd = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [yarn, setYarn] = useState("");
    const [hook, setHook] = useState("");
    const [weight, setWeight] = useState("");
    

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleYarnChange = (event) => {
        setYarn(event.target.value);
    };

    const handleHookChange = (event) => {
        setHook(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };
    

    const addNote = () => {
        if (title !== "" && yarn !== "" && description !== "" && weight !== "" && hook !== "") {
            firebase.database().ref("notebook").push({
                title: title,
                yarn: yarn,
                description: description,
                weight: weight,
                hook: hook
            });
        }
    };

    return (
        <>
            <div className="noteadd">
                <h1>Add a New Note</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-header"
                        name="noteadd-header"
                        placeholder="Note Title"
                        value={title}
                        onChange={(val) => handleTitleChange(val)}
                    />
                </div>
      
      
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-yarn"
                        name="noteadd-yarn"
                        placeholder="Amount of Yarn"
                        value={yarn}
                        onChange={(val) => handleYarnChange(val)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-hook"
                        name="noteadd-hook"
                        placeholder="Hook size"
                        value={hook}
                        onChange={(val) => handleHookChange(val)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-weight"
                        name="noteadd-weight"
                        placeholder="Yarn weight"
                        value={weight}
                        onChange={(val) => handleWeightChange(val)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="noteadd-description"
                        className="noteadd-description"
                        placeholder="Note Description"
                        value={description}
                        onChange={(val) => handleDescriptionChange(val)}
                    ></textarea>
                </div>
                <div className="noteadd-button">
                    <button onClick={() => addNote ()}>Add a Note</button>
                </div>
            </div>
        </>
    );
};

export default NoteAdd;