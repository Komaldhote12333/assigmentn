import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Aboutdepartment.css';
import Gallery from '../imagesGalary/Imagesgalary';
import Facultycrousel from '../Facultycrousel/Facultycrousel';

const AboutSpecficcourc =() => {

  let { userId } = useParams();
    
   
  const{CommonGetbyid,specificcourcesarray} = useContext(MyContext)
  
  useEffect(() => {
   CommonGetbyid("CourseList" , userId)
  
 },[]); 
 console.log(specificcourcesarray)

 
  return (
    <div className="department">
    <h2>{specificcourcesarray?.name}</h2>
    
    <div className="hod">
      <img src={specificcourcesarray?.hodimg} />
      <div className="hod-details">
        <h3>Department Head: Prof. {specificcourcesarray?.hodname}</h3>
        <p>{specificcourcesarray?.hoddetais}</p>
     
      </div>
    </div>
    
    <div className="about-department">
      <h3>About the Department:</h3>
      <p>
        {specificcourcesarray?.aboutdepartment}
      </p>
    </div>


    <div>
  <b>Galary Of {specificcourcesarray?.name} </b>
    
    <Gallery arr = {specificcourcesarray?.images}
    />
    
    
    </div>




    <div className="facultycrousel" >
  <b >Faculties SWAMI VIVEKANAD COLLEGE OF INSTITUTIONS INDORE </b>

     <Facultycrousel/>
    
    
    
    </div>

    </div>



    

  )
}

export default AboutSpecficcourc