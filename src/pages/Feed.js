import React , { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const Feed = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('api/feeds');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="events">
               <h1>Welcome to Our Environmental Feed</h1>
            
            {events.map((event) => (
                <div key={event.heading}>
                    <h3>{event.heading}</h3>
                    <p>{event.description}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;