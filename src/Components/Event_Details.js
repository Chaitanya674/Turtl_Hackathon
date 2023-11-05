import { EventContext } from '../hooks/EventHook'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const EventDetails = ({ event }) => {
  const { dispatch } = EventContext()

  const handleClick = async () => {
    const response = await fetch('api/event/' + event._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_EVENT', payload: json})
    }
  }

  return (
    <div className="event-details">
      <h4>{event.title}</h4>
      <p><strong>Description : </strong>{event.des}</p>
      <p><strong>Location : </strong>{event.loc}</p>
      <p>{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default EventDetails