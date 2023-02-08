import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./NoteAdd.css";


//the functions that are going to be updated
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
//what is going to be rendered on the page
    return (
        <>
            <div className="noteadd">
                <h1>Add a New Page</h1>
                {/* section that contains the Project Title field and the code to update based on user input */}
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-header"
                        name="noteadd-header"
                        placeholder="Project Title"
                        value={title}
                        onChange={(val) => handleTitleChange(val)}
                    />
                </div>  
                {/* section that contains the Amount of Yarn field and the code to update based on user input */}
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
                {/* section that contains the Hook Size field and the code to update based on user input */}
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-hook"
                        name="noteadd-hook"
                        placeholder="Hook Size"
                        value={hook}
                        onChange={(val) => handleHookChange(val)}
                    />
                </div>
                {/* section that contains the Yarn weight field and the code to update based on user input */}
                <div className="form-group">
                    <input
                        type="text"
                        className="noteadd-weight"
                        name="noteadd-weight"
                        placeholder="Yarn Weight"
                        value={weight}
                        onChange={(val) => handleWeightChange(val)}
                    />
                </div>
                <div className="form-group">
                    {/* section that contains the description and the code to update based on user input */}
                    <textarea
                        name="noteadd-description"
                        className="noteadd-description"
                        placeholder="Note Description"
                        value={description}
                        onChange={(val) => handleDescriptionChange(val)}
                    ></textarea>
                </div>
                <div className="noteadd-button">
                    <button onClick={() => addNote ()}>Add a Page</button>
                </div>
            </div>
        </>
    );
};

export default NoteAdd;