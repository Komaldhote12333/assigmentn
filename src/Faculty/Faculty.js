import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../ADMINPANEL/CONTEXTAPI/mycontext';
import styles from './FacultyForm.module.css'; // Import CSS module

const FacultyForm = () => {
  const { departmentdata, Commonpostfunction, Collegedata, Facultyarray, Facultylist, CommonDelete } = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    department: '',
    college: '',
    role: '',
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
      image: imageFile,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);
    formDataToSend.append('name', formData.name);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("department", formData.department);
    formDataToSend.append('college', formData.college);
    formDataToSend.append('role', formData.role);

    console.log(formData);
    Commonpostfunction("FacultyList/", formDataToSend);
    Facultylist();
    setFormData({
      name: '',
      subject: '',
      department: '',
      college: '',
      role: '',
    });
  };

  return (
    <div className={styles.container}>
      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Image Upload:
            <input
              type="file"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            {departmentdata?.map((item) => {
              return <option value={item?.id}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label>College:</label>
          <select
            name="college"
            value={formData.college}
            onChange={handleInputChange}
          >
            <option value="">Select College</option>
            {Collegedata?.map((item) => {
              return <option value={item?.id}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Faculty List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Department</th>
              <th>College</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Facultyarray?.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.name}</td>
                <td>{faculty.subject}</td>
                <td>{faculty.department}</td>
                <td>{faculty.college}</td>
                <td>{faculty.role}</td>
                <td>
                  <button
                    className={`${styles.deletebutton}`}
                    onClick={() => {
                      CommonDelete("FacultyList", faculty.id);
                      Facultylist();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyForm;
