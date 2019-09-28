import React, { useEffect } from 'react';

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Set Effect');
    return () => {
      console.log('Cleaning Effect');
    };
  }, []);

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

export default Note;
