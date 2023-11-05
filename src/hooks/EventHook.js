import { EventsContext } from "../Events_context"
import { useContext } from "react"

export const EventContext = () => {
  const context = useContext(EventsContext)

  if(!context) {
    throw Error('useEventContext must be used inside a EventContextProvider')
  }

  return context
}