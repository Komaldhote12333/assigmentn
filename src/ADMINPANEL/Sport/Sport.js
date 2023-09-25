import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Sport.module.css'; // Import CSS module

const Sport = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, sportarray, sportlist } = useContext(MyContext);
  const [SportData, setSportData] = useState({
    image: null,
    name: '',
    college: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    
    setSportData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', SportData.image);
    formDataToSend.append('college', SportData.college);
    formDataToSend.append('name', SportData.name);

    await Commonpostfunction('SportImagesList/', formDataToSend);
  setSportData({
      name: '',
      college: '',
      image: null,
    });
    sportlist();
  };

  useEffect(() => {
    sportlist();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Create Sport</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className={styles.form}>
        <label>
          Image Upload:
          <input
            type="file"
            onChange={handleImageUpload}
            className={styles.fileInput}
          />
        </label>
        <br />
        <label>
          Event Name:
          <input type="text" name="name" value={SportData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          College:
          <select name="college" value={SportData.college} onChange={handleChange}>
            <option value="">Select College</option>
            {Collegedata?.map((item) => {
              return <option key={item.id} value={item.id}>{item.name}</option>;
            })}
          </select>
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>Create Event</button>
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
            {sportarray?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span
                    onClick={() => {
                      CommonDelete('SportImagesList', item.id);
                      sportlist();
                    }}
                  >
                    Delete
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

export default Sport;
