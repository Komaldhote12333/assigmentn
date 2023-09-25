import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Subcollege.module.css'; // Import CSS module

const Subcollege = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, subcollegearray, subcollegelistt } = useContext(MyContext);
  const [SubcollegeData, setSubcollegeData] = useState({
    name: '',
    college: null,
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcollegeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    subcollegelistt();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', SubcollegeData.name);
    formDataToSend.append('college', SubcollegeData.college);
    formDataToSend.append("duration", SubcollegeData.duration);

    Commonpostfunction("SubcollegeList/", formDataToSend);
    setSubcollegeData({
      name: '',
      college: null,
      duration: '',
    });
    subcollegelistt();
  };

  return (
    <div className={styles.container}>
      <h2>Create Subcollege</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            value={SubcollegeData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          College:
          <select
            name="college"
            value={SubcollegeData.college}
            onChange={handleChange}
          >
            <option value="">Select College</option>
            {Collegedata?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={SubcollegeData.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>
          Create Event
        </button>
      </form>

      <div className={styles.tablecontainer}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subcollegearray?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span
                    onClick={() => {
                      CommonDelete("SubcollegeList", item?.id);
                      subcollegelistt();
                    }}
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subcollege;
