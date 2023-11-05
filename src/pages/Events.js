import { useEffect } from "react"
import { EventContext } from "../hooks/EventHook"

// components
import EventDetails from "../Components/Event_Details"
import EventForm from "../Components/Event_Form"

const Events = () => {

    const { events, dispatch } = EventContext()

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('api/event')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EVENT', payload: json})
      }
    }

    fetchEvents()
  }, [dispatch])

  return (
    <div className="home">
      <div className="events">
        {events && events.map(event => (
          <EventDetails event={event} key={event._id} />
        ))}
        
      </div>
      <EventForm />
    </div>
  )
}

export default Events;