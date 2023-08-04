// src/components/CreateEventForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateEventForm = () => {
  const [eventData, setEventData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/events/', eventData , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // Handle success
        console.log('Event created successfully:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating event:', error);
      });
  };

  return (
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
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={eventData.time}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
