import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./Notebook.css"; 

const Notebook = (props) => {
    const deleteNotebook = (id) => {
        firebase.database().ref("notebook").child(id).remove();
    };

    return (
        <>
            <section className="notebook-container">
                <div className="notebook">
                    {props.notebook.map((note, index) => (
                        <React.Fragment key={index}>
                            <div className="notebookInfo" key={note.id}>
                                <div className="notebookInfo-title">
                                    <h3>{note.title}</h3>
                                    <div className="remove" onClick={() => deleteNotebook(note.id)} aria-label="click to remove page">
                                       <span role="img" aria-label="an 'x' to close a notebook page">✖️</span>
                                    </div>
                                </div>
                                <div className="notebookInfo-yarn">
                                    <h4>Amount: {note.yarn}</h4>
                                </div>
                                <div className="notebookInfo-hook">
                                    <h4>Hook: {note.hook}</h4>
                                </div>
                                <div className="notebookInfo-weight">
                                    <h4>Yarn weight: {note.weight}</h4>
                                </div>
                                
                                <div className="notebookInfo-description">
                                    <p>{note.description}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Notebook;