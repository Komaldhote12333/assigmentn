import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Collegeform.module.css'; // Import the CSS module
import { Link } from "react-router-dom";

const Collegeform = () => {
  const [formData, setFormData] = useState({
    name: '',
    hprincipaldimg: '',
    principalname: '',
    Aboutprincipal: '',
  });

  const { Commonpostfunction, getCollegelist, Collegedata, CommonDelete } = useContext(MyContext);
  const { Postfunction, token } = useContext(MyContext);

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

    Commonpostfunction('CollegeList/', formDataToSend);
    getCollegelist();
  };

  useEffect(() => {
    getCollegelist();
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
      <table className={styles.collegeTable}>
        <thead>
          <tr>
            <th>College Name</th>
            <th>Principal Name</th>
            <th>About Principal</th>
            <th>Actions</th>
            <th>Update</th>

          </tr>
        </thead>
        <tbody>
          {Collegedata?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>{item?.principalname}</td>
              <td>{item?.Aboutprincipal}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    CommonDelete('CollegeList', item?.id);
                    getCollegelist();
                  }}
                >
                  Delete
                </button>
              </td>


              <td>
              <button
                className={styles.deleteButton}
                
              >
              <Link to={`/updateclg/${item?.id}`}>Update</Link>
              </button>
            </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collegeform;
