import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((prev) => {
      return {
        //spread all current existing operators in newNote
        ...prev,
        //destructured name takes value of whichever input calls handleChange
        [name]: value
      };
    });
    console.log(newNote);
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote(() => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={newNote.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
