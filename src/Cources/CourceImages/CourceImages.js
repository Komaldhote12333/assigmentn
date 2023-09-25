import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import styles from './CourcemagesForm.module.css';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import Cource from '../Cources';
const CourcemagesForm = ({ Courceidprop }) => {
  const { Commonpostfunction } = useContext(MyContext);

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  console.log(Courceidprop)
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Courceidprop || images.length === 0) {
      setMessage('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('course', Courceidprop); // Change 'Events' to 'Course' here
    console.log("Course", formData.get('Course'));
    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }
    Commonpostfunction('CourseImageList/', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

export default CourcemagesForm;
