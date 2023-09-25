import './Cources.css';

import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Facultycrousel from '../Facultycrousel/Facultycrousel';
import { Link } from "react-router-dom";

const Cources =() => {
   let { userId } = useParams();
    console.log(userId)
   
   const{CommonGetbyidforcr,Subcollegecourcesarray} = useContext(MyContext)

   useEffect(() => {
    CommonGetbyidforcr("CollegeList" , userId)
   
  },[userId]);

   console.log(Subcollegecourcesarray)
  
      

      return (
        <div className=
        'courcesview'>




       <div className="mainclgpartname">{Subcollegecourcesarray?.name} COURSES </div>

     {Subcollegecourcesarray?.subcollege?.map((item)=>{
      return  <div>
      
    <div>
 

  </div>
      
      <div className="subcallegeheading"><h2 className="subcallegeheading"  >{item?.name}</h2></div>
        
      
   
      <table>
      <thead>
        <tr>
          <th scope="col">Cource Name</th>
          <th scope="col">Cource Fess</th>
          <th scope="col">Cource Durations</th>
          <th scope="col"> About Cource</th>
        </tr>
      </thead>
      <tbody>

      {item?.courses_offered?.map((cour)=>{
        console.log(cour)
        return   <tr>
        <td data-label="Account">{cour?.name}</td>
        <td data-label="Amount">{cour?.fees} Rs</td>
        <td data-label="Period">{item?.duration} Year</td>
       <td data-label="More About">   <Link to={`/CourceSpecificView/${cour?.id}`}> More About</Link>  </td>
      
      </tr>
      })}
       
      
      </tbody>
    </table>









      </div>
        

        
      


     })}


  
        
        </div>
       
      );
}

export default Cources