import React from 'react';
import "./Sidebar.css";

const Sidebar = ({onAddNote,onDeleteNote,notes,activeNote,setActiveNote}) => {
  return (
    <div className='note-sidebar'>
        <div className='note-sidebar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
        </div>
        <div className='note-sidebar-notes'>
          {notes.map((note)=>(
            <div className='note-sidebar-note active' key={note.id}>
                <div className='sidebar-note-title'>
                    <strong>{note.title}</strong>
                    <button onClick={()=>onDeleteNote(note.id)}>削除</button>
                </div>
                <p>{note.content}</p>
                <small>{new Date(note.modDate).toLocaleDateString("ja-JP")}</small>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar;