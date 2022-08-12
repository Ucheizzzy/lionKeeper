import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)
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
    props.onAdd(notes)
    setNotes({
      title: '',
      content: '',
    })
    event.preventDefault()
  }

  function expand() {
    setExpanded(true)
  }
  return (
    <div>
      <form className='create-note'>
        <input
          name='title'
          placeholder='Title'
          value={notes.title}
          onChange={handleChange}
        />
        <textarea
          onClick={expand}
          name='content'
          placeholder='Take a note...'
          value={notes.content}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        />

        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  )
}

export default CreateArea
