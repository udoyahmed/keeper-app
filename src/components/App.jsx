import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default App;

function App() {
    const [notes, setNote] = useState([])
    function pushNote(note) {
        setNote((prevValue) => {
            return [...prevValue, note]
        });
    }
    function removeNote(id) {
        const newNotes = notes.filter((note, index) => index !== id);
        setNote(newNotes);
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={pushNote} />
            {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} deleteNote={removeNote} />)}
            <Footer />
        </div>
    );
}