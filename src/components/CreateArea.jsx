import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        const value = event.target.value;
        if (event.target.name === "title") {
            setNote(prevValue => {
                return {
                    ...prevValue,
                    title: value
                }
            })
        } else if (event.target.name === "content") {
            setNote(prevValue => {
                return {
                    ...prevValue,
                    content: value
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={(event) => {
                props.addNote(note);
                event.preventDefault();
                setNote({ title: "", content: "" })
            }}>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
