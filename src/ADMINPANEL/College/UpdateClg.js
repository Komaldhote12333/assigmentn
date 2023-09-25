import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Collegeform.module.css'; 
import { Link, useParams } from 'react-router-dom'; 

const UpdateCollegeform = () => {
  const { id } = useParams();
  const { collegeobjarr, Commonputbyid, CommonGetbyid } = useContext(MyContext);

  // Initialize the state with the values from collegeobjarr
  const [formData, setFormData] = useState({
    name: collegeobjarr.name,
    hprincipaldimg: '', // You may initialize this with an empty string or null
    principalname: collegeobjarr.principalname,
    Aboutprincipal: collegeobjarr.Aboutprincipal,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];

    setFormData((prevData) => ({
      ...prevData,
      hprincipaldimg: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append all form data to formDataToSend
    formDataToSend.append('name', formData.name);
    formDataToSend.append('hprincipaldimg', formData.hprincipaldimg);
    formDataToSend.append('principalname', formData.principalname);
    formDataToSend.append('Aboutprincipal', formData.Aboutprincipal);

    Commonputbyid('CollegeList', id, formDataToSend);
  };

  useEffect(() => {
    CommonGetbyid('CollegeList', id);
  }, []);

  return (
    <div className={styles.collegeForm}>
      <h2>Create College</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Principal Name:</label>
          <input
            type="text"
            name="principalname"
            value={formData.principalname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>About Principal:</label>
          <textarea
            name="Aboutprincipal"
            value={formData.Aboutprincipal}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image Upload:</label>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateCollegeform;
