import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

export default App;

const data = [
    {
        id: 1,
        title: "Note 1",
        content: "Content 1"
    },
    {
        id: 2,
        title: "Note 2",
        content: "Content 2"
    },
    {
        id: 3,
        title: "Note 3",
        content: "Content 3"
    }
]

function App() {
    return (
        <div>
            <Header />
            {data.map(note => <Note title={note.title} content={note.content} />)}
            <Footer />
        </div>
    );
}