import React, { useRef, useEffect } from 'react';

import './cardplaced.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function CardComponentStudent(props) {






  gsap.registerPlugin(ScrollTrigger);
  const contentbox = useRef([]);

  const makearrbox =(el) =>{
    if(el && !contentbox.current.includes(el)){
      contentbox.current.push(el)
    }
   
  }

 var k =1

  const animatebox = () => {
     if(k === 1){
      gsap.from(contentbox.current, {
        scale:0.60,
        duration:1.50,

   

        scrollTrigger: {
          trigger: contentbox.current,
          start: '-222 45%',
          end: 'bottom bottom',
          scrub: 1,
     
        },
      
      });
      k = k + 1
     }

     
     


    

    
  
  };

  useEffect(() => {
    animatebox();
  }, []);













  return (
    <div className="student-card"  >
      <img loading="lazy" ref= {makearrbox}  src={props.image}  alt={props.studentName} />
      <h3 >{props.studentName}</h3>
      <p>Role: {props.jobRole}</p>
      <p>Company: {props.companyName}</p>
      <p>Package: {props.package} LPA</p>
      <p>College: {props.college}</p>
    </div>
  );
}

export default CardComponentStudent;
