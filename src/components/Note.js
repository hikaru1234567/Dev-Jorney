import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import "./Note.css"
import { useState } from 'react';
import uuid from 'react-uuid';

const Note = () => {
  const [notes, setNotes]=useState([]);
  const [activeNote,setActiveNote]=useState(false);

  const onAddNote=()=>{
  const newNote={
    id:uuid(),
    title:"新しいノート",
    content: "新しいノートの内容",
    modDate:Date.now,
  };
  setNotes([...notes,newNote]);
  }

  const onDeleteNote=(id)=>{
   const fillterNotes=notes.filter((note)=>note.id!==id);
   setNotes(fillterNotes);
  };


  return (
    <div className='Note'> 
    <Sidebar 
     onAddNote={onAddNote}
     notes={notes}
     onDeleteNote={onDeleteNote}
     activeNote={activeNote}
     setActiveNote={setActiveNote}
     />
    <Main activeNote={activeNote}/>
    </div>
  )
}

export default Note;