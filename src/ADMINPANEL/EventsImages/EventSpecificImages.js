import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './EventImagesForm.module.css';

const EventImagesForm = ({ eventIDProp }) => {
  const { Commonpostfunction } = useContext(MyContext);

  // Remove the useState for eventID and use the prop directly
  // const [eventID, setEventID] = useState(eventIDProp);

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  // You can use eventIDProp directly if needed

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventIDProp || images.length === 0) {
      setMessage('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('Events', eventIDProp);

    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }
    Commonpostfunction('EventListImages/', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* No need to render the eventID input if you are using the prop */}
        {/* <div hidden>
          <label htmlFor="eventID">Event ID:</label>
          <input
            type="text"
            id="eventID"
            value={eventID}
            onChange={handleEventIDChange}
            hidden
          />
        </div> */}
        <div>
          <label htmlFor="image" hidden>Select Images:</label>
          <input
            className={styles.inputimg}
            type="file"
            id="image"
            multiple
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EventImagesForm;
