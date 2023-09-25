import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './EventForm.module.css';
import EventImagesForm from '../EventsImages/EventSpecificImages';
const EventForm = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, Eventdatata, getEventlist } = useContext(MyContext)
  const { Postfunction, token } = useContext(MyContext)
  const [eventData, setEventData] = useState({
    eventname: '',
    image:'',
    college: null,
    event_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  useEffect(()=>{
    getEventlist()

  },[])
  
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    
    setEventData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('eventname', eventData.eventname);

    formDataToSend.append('image', eventData.image);
    console.log("name:", eventData.name);
    formDataToSend.append('college', eventData.college);
    formDataToSend.append('event_date', eventData.event_date);

    Commonpostfunction("EventList/", formDataToSend)
    getEventlist()
    // You can perform form submission logic here, like sending data to a backend API
    console.log(eventData);
  };

  return (
    <div className={styles.collegeForm}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventname"
            value={eventData.eventname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Image Upload:
        <input
          type="file"
          onChange={handleImageUpload}
        />
      </label>
        <br />
        <label>
          College:
          <select
            name="college"
            value={eventData.college}
            onChange={handleChange}
          >
          <option value="">Select College</option>

            {Collegedata?.map((item) => {
              return <option value={item.id}>{item.name}</option>
            })}

          </select>
        </label>
        <br />


        <div>
        <label>Event Date:</label>
        <input
          type="date"
          name="event_date"
          value={eventData.event_date}
          onChange={handleChange}
          required
        />
      </div>
        <button type="submit">Create Event</button>
      </form>
      
      <div className={styles.tablecontainer}>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Event Name</th>
            <th>Event Date</th>

            {/* Add more table headers for other fields */}
          </tr>
        </thead>
        <tbody>
          {Eventdatata?.map((item) => (
            <tr key={item?.id}>
              <td>
                <span  className={styles.deleteButton} onClick={() => {
                  CommonDelete("EventList", item?.id)
                  getEventlist()
                }}>delete</span>
              </td>
              <td>{item?.eventname}</td>
              <td>{item?.event_date}</td>
              <td><EventImagesForm eventIDProp = {item?.id}  /></td>

              {/* Add more table cells for other fields */}
            </tr>

            
          ))}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default EventForm;
