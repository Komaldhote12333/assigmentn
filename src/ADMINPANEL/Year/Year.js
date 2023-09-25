import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './YearForm.module.css'; // Import CSS module

const YearForm = () => {
  const [yeardata, setyeardata] =  useState({
    year: '',
    college: null
  });
  const { Commonpostfunction, getCollegelist, Collegedata, CommonDelete, yeardataarray, Yearlist } = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setyeardata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('year', yeardata.year);
    formDataToSend.append('college', yeardata.college);

    console.log("college:", yeardata.name);
    Commonpostfunction("YearStudentList/", formDataToSend);
    Yearlist();
  }
  
  useEffect(() => {
    Yearlist();
    getCollegelist();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Create College</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={yeardata.year}
            onChange={handleChange}
            required
          />
          <label>
            College:
            <select
              name="college"
              value={yeardata.college}
              onChange={handleChange}
            >
              <option value="">Select College</option>
              {Collegedata?.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </label>
        </div>
        <button type="submit">Create Year</button>
      </form>
      {yeardataarray?.map((item) => {
        return (
          <div key={item?.id}>
            <span
              className={`${styles.deletebutton}`}
              onClick={() => {
                CommonDelete("YearStudentList", item?.id);
                Yearlist();
              }}
            >
              delete
            </span>
            <span key={item?.id}>{item?.year}</span>
          </div>
        );
      })}
    </div>
  );
};

export default YearForm;
