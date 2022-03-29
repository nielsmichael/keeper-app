import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
