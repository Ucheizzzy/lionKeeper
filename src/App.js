import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import CreateArea from './CreateArea'

function App() {
  // we need to add the notes to an array
  const [note, setNote] = useState([])

  function addNote(newnote) {
    setNote((prevNotes) => {
      return [...prevNotes, newnote]
    })
  }
  function deleteNote(id) {
    // console.log('This delete was triggered')
    setNote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        )
      })}

      <Footer />
    </div>
  )
}

export default App
