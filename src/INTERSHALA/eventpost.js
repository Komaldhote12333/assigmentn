import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
    image: '',
    isLiked: false,
    "user_id": 4,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/events/',
        eventData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log('Event created:', response.data);
      // You can redirect or perform other actions after event creation
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="event_name"
            value={eventData.event_name}
            onChange={handleChange}
          />
        </label>

        <label>
        Event Name:
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
      </label>


      <label>
      Event Name:
      <input
        type="time"
        name="time"
        value={eventData.time}
        onChange={handleChange}
      />
    </label>


    <label>
    Event Name:
    <input
      type="text"
      name="location"
      value={eventData.location}
      onChange={handleChange}
    />
  </label>


  <label>
  Event Name:
  <input
    type="file"
    name="image"
    value={eventData.image}
    onChange={handleChange}
  />
  </label>


  
        {/* Other input fields for date, time, location, image, and isLiked */}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
