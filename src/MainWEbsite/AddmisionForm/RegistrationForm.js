import React, { useState } from 'react';
import './RegistrationForm.css';
import { useContext, useEffect } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import SvgiCrousel from '../Svgicrousel/SvgiCrousel';

function RegistrationForm() {
  const { subcollegearray, subcollegelistt, CommonGetbyid, AdmisinAddFunction,subcollegegeobj } = useContext(MyContext);
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [additionalField, setAdditionalField] = useState('');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(studentName,email,city,phone,department,course,additionalField)


    const formDataToSend = new FormData();

    // Append all form data to formDataToSend
    formDataToSend.append('student_name', studentName);
    formDataToSend.append('email', email);
    formDataToSend.append('city', city);
    formDataToSend.append('phone', phone);
    formDataToSend.append('department',department );
    formDataToSend.append('course', course);
   

    AdmisinAddFunction('Addmision_quarie/', formDataToSend);
    // You can add your form submission logic here
    // For example, you can send the data to a server or perform client-side validation
  };

  useEffect(() => {
    subcollegelistt();
  }, []);
  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    const selectedDepartmentId = selectedDepartment === 'option1'
      ? null // Set to null for the "SELECT" option
      : subcollegearray.find((item) => item.name === selectedDepartment)?.id;
    setDepartment(selectedDepartment);
    setSelectedDepartmentId(selectedDepartmentId);
    CommonGetbyid("SubcollegeList" , selectedDepartmentId)
  };
  
  
 



  return ( 
    <>
   <div className="addmisionopenimg">
     <h1>ADDMISSSION ARE OPEN </h1>
   </div>

   <SvgiCrousel/>

   
    <div className="login-root">
    
      <div className="formbg-inner padding-horizontal--48">
        <span className="padding-bottom--15">Student Admission Form</span>
        <form className="registration_form" onSubmit={handleSubmit}>
          <div className="field padding-bottom--24">
            <label className="studentname" htmlFor="studentName">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="department">Department</label>
            <select
              name="department"
              value={department}
              onChange={handleDepartmentChange}
            >
              <option value="option1">SELECT</option>

              {subcollegearray?.map((item) => (
                <option value={item?.name}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="course">Course</label>
            <select
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="course1">Course 1</option>
              {subcollegegeobj?.courses_offered?.map((item)=>{
                return  <option key={item?.id} value={item?.name}>{item?.name}</option>

              })}
            </select>
          </div>
          <div className="field padding-bottom--24">
            <label htmlFor="additionalField">Additional Field</label>
            <input
              type="text"
              name="additionalField"
              value={additionalField}
              onChange={(e) => setAdditionalField(e.target.value)}
            />
          </div>
          <div className="field">
            <input type="submit" name="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default RegistrationForm;
