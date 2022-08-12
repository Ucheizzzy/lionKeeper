import React, { useState } from 'react'

function CreateArea() {
  const [notes, setNotes] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    // destructure the event.target
    const { name, value } = event.target

    setNotes((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      }
    })
  }

  function submitNote(event) {
    event.preventDefault()
  }
  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Title'
          value={notes.title}
          onChange={handleChange}
        />
        <textarea
          name='content'
          placeholder='Take a note...'
          value={notes.content}
          onChange={handleChange}
          rows='3'
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
