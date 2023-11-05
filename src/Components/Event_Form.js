import { useState } from 'react'
import { EventContext } from '../hooks/EventHook'

const EventForm = () => {
  const { dispatch } = EventContext()

  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [loc, setLoc] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const event = {title, des, loc}
    
    const response = await fetch('api/event', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setDes('')
      setLoc('')
      dispatch({type: 'CREATE_EVENT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Host Event</h3>

      <label>Event Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Description :</label>
      <input 
        type="text" 
        onChange={(e) => setDes(e.target.value)} 
        value={des}
        className={emptyFields.includes('des') ? 'error' : ''}
      />

      <label>Location :</label>
      <input 
        type="test" 
        onChange={(e) => setLoc(e.target.value)} 
        value={loc}
        className={emptyFields.includes('loc') ? 'error' : ''}
      />

      <button>Host Event</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default EventForm