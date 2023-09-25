import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import React, { useEffect, useState } from 'react';
import styles from './UserForm.module.css';
const UserForm = () => {
  const{Postfunction , usersdataarray  ,usersdata,CommonDelete} = useContext(MyContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'admin',
    username: '',
    password: '', // New password field
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    const end = "Create_admins"
    
      Postfunction(end ,formData )
      
    
    
  };


  useEffect(() => {
    usersdata();
  }, []);
  return (
    <div className={styles['user-form-container']}>
      <form className={styles['user-form']} onSubmit={handleSubmit}>
        <div>
          <label className={styles['user-label']}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles['user-input']}
          />
        </div>
        <div>
          <label className={styles['user-label']}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles['user-input']}
          />
        </div>
        <div>
          <label className={styles['user-label']}>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={styles['user-select']}
          >
            <option value="tpo">Training and Placement Officer</option>
            <option value="admin">Admin</option>
            <option value="Superadmin">Superadmin</option>
          </select>
        </div>
        <div>
          <label className={styles['user-label']}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={styles['user-input']}
          />
        </div>

        <div>
          <label className={styles['user-label']}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles['user-input']}
          />
        </div>

        <button type="submit" className={styles['user-button']}>
          Submit
        </button>
      </form>

      <table className={styles['user-table']}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersdataarray.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => CommonDelete('Create_admins', user?.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;
