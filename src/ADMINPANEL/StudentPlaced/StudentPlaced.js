// StudentPlacementForm.js
import React, { useState } from 'react';
import styles from './Studentplaced.module.css'; // Import your CSS module here (using 'styles' as the alias)
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';

const StudentPlacementForm = () => {
  const {
    Commonpostfunction,
    getCollegelist,
    Collegedata,
    CommonDelete,
    yeardataarray,
    Yearlist,
    placementdata,
    Placedstudenylist,
  } = useContext(MyContext);

  const [formData, setFormData] = useState({
    year: '',
    company_name: '',
    job_role: '',
    pakageLpa: '',
    package: 0,
    studentname: '',
    image: null,
    college: '',
  });

  const handleChange = (e) => {
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
      image: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('year', formData.year);
    formDataToSend.append('company_name', formData.company_name);
    formDataToSend.append('job_role', formData.job_role);
    formDataToSend.append('pakageLpa', formData.pakageLpa);
    formDataToSend.append('package', formData.package);
    formDataToSend.append('studentname', formData.studentname);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('college', formData.college);

    try {
      await Commonpostfunction('StudentPlacementList/', formDataToSend);
      Placedstudenylist();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Student Placement Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Year:
          <select name="year" value={formData.year} onChange={handleChange}>
            <option value="">Select Year</option>
            {yeardataarray?.map((item) => (
              <option value={item.id} key={item.id}>
                {item.year}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Student Name:
          <input
            type="text"
            name="studentname"
            value={formData.studentname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company Name:
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Role:
          <input
            type="text"
            name="job_role"
            value={formData.job_role}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Package (LPA):
          <input
            type="text"
            name="pakageLpa"
            value={formData.pakageLpa}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Package (Integer):
          <input
            type="number"
            name="package"
            value={formData.package}
            onChange={handleChange}
          />
        </label>
        <label>
          Image Upload:
          <input type="file" onChange={handleImageUpload} />
        </label>
        <label>
          College:
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {placementdata?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.company_name}</td>
              <td>
                <span
                  className={styles.deleteButton}
                  onClick={() => {
                    CommonDelete('StudentPlacementList', item?.id);
                    Placedstudenylist();
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
  );
};

export default StudentPlacementForm;
