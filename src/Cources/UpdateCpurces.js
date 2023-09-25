import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../ADMINPANEL/CONTEXTAPI/mycontext';
import styles from './Course.module.css'; // Import CSS module
import CourcemagesForm from './CourceImages/CourceImages';
import { Link, useParams } from 'react-router-dom'; 

const UpdateCource = () => {

  const { id } = useParams();

  const {  CommonGetbyid,specificcourcesarray, Commonputbyid, CommonDelete, subcollegearray, Curselist, coursees } = useContext(MyContext);


  console.log("courceList",specificcourcesarray)
  const [CourceData, setCourceData] = useState({
    name:specificcourcesarray.name ,
    subcollege: specificcourcesarray.subcollege,
    fees: specificcourcesarray.fees,
    hodname: specificcourcesarray.hodname,
    hodimg: '',
    hoddetais: specificcourcesarray.hoddetais,
    aboutdepartment: specificcourcesarray.aboutdepartment
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourceData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setCourceData((prevData) => ({
      ...prevData,
      hodimg: imageFile,
    }));
  };

  useEffect(() => {
    CommonGetbyid('CourseList', id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', CourceData.name);
    formDataToSend.append('subcollege', CourceData.subcollege);
    formDataToSend.append("fees", CourceData.fees);
    formDataToSend.append("hodname", CourceData.hodname);
    formDataToSend.append("hodimg", CourceData.hodimg);
    formDataToSend.append("hoddetais", CourceData.hoddetais);
    formDataToSend.append("aboutdepartment", CourceData.aboutdepartment);
      Commonputbyid('CourseList', id, formDataToSend);

  };

  return (
    <div className={styles.container}>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Course Name:
          <input
            type="text"
            name="name"
            value={CourceData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Subcollege:
          <select
            name="subcollege"
            value={CourceData.subcollege}
            onChange={handleChange}
          >
            <option value="">Select Subcollege</option>
            {subcollegearray?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Course Fees:
          <input
            type="text"
            name="fees"
            value={CourceData.fees}
            onChange={handleChange}
          />
        </label>
        <label>
          HOD Name:
          <input
            type="text"
            name="hodname"
            value={CourceData.hodname}
            onChange={handleChange}
          />
        </label>
        <div>
          <label>Image Upload:</label>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <label>
          HOD Details:
          <input
            type="text"
            name="hoddetais"
            value={CourceData.hoddetais}
            onChange={handleChange}
          />
        </label>
        <label>
          About Department:
          <input
            type="text"
            name="aboutdepartment"
            value={CourceData.aboutdepartment}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>
          Create Cource
        </button>
      </form>

 
    </div>
  );
};

export default UpdateCource;
