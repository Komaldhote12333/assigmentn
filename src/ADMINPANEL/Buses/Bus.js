import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Bus.module.css'; // Import CSS module

const Bus = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, buslist, busarray } = useContext(MyContext);
  const [BusData, setBusData] = useState({
    image: '',
    name: '',
    college: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    
    setBusData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  useEffect(() => {
    buslist();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', BusData.image);
    formDataToSend.append('name', BusData.name);
    formDataToSend.append('college', BusData.college);

    Commonpostfunction("BusesList/", formDataToSend);
    setBusData({
      name: '',
      college: null,
      image: '',
    });
    buslist();
  };

  return (
    <div className={styles.container}>
      <h2>Create Bus</h2>
      <form onSubmit={handleSubmit}>
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
          bus Name anything:
          <input
            type="text"
            name="name"
            value={BusData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          College:
          <select
            name="college"
            value={BusData.college}
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
        <br />
        <button type="submit" className={styles.submitButton}>
          Create busimages
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
            {busarray?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span
                    onClick={() => {
                      CommonDelete("BusesList", item?.id);
                      buslist();
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

export default Bus;
