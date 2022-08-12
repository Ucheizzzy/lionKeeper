import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

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
        {isExpanded ? (
          <input
            name='title'
            placeholder='Title'
            value={notes.title}
            onChange={handleChange}
          />
        ) : null}
        <textarea
          onClick={expand}
          name='content'
          placeholder='Take a note...'
          value={notes.content}
          onChange={handleChange}
          rows={isExpanded ? 5 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
