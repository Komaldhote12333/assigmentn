import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './event.css';


const Events = () => {
  const [events, setEvents] = useState([]);
  const [komal , setkomal] = useState(9)
  console.log(events)
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch events data from your Django API using the token for authentication
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        // Handle errors, e.g., token expiration or invalid token
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [token , komal]);

  const handleLike = async (eventId) => {
    try {
      const eventToUpdate = events.find((event) => event.id === eventId);
      const updatedEvent = { ...eventToUpdate, is_liked: !eventToUpdate.is_liked };
      await axios.put(`http://127.0.0.1:8000/api/api/events/${eventId}/`, updatedEvent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       
      setkomal(komal + 1)
      
     
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          {events.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="itemsevent">
                  <div className="imgevent"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIIieURi7f3Q9LTWNdS8adqla0v5HgOuLOjaFylW2sA&s" alt="" /></div>
                  <div className="eventdetais">
                    <div className="eventtitle">{item.event_name}</div>
                    <div className="eventdate">{item.date}</div>
                    <div className="eventtime">{item.time}</div>
                  </div>
                  <div className="updateandlike">
                    <div className="update">up</div>
                    <div className="like"style={{color : item.is_liked ? "red" :"green"}} onClick={()=>{handleLike(item.id)}}>like</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;