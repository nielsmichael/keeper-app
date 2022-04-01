import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((prev) => {
      return {
        //spread all current existing operators in newNote
        ...prev,
        //destructured name takes value of whichever input calls handleChange
        [name]: value,
      };
    });
    console.log(newNote);
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote(() => {
      return {
        title: "",
        content: "",
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && ( //use && operator instead of ? input : null
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          onClick={() => {
            setIsClicked(true);
          }}
          onChange={handleChange}
          placeholder="Take a note..."
          value={newNote.content}
          rows={isClicked ? "3" : "1"}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
