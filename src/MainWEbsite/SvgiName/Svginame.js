import './Svginame.css';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Svginame =() => {
  const svcerem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  var k =1

  const animatebox = () => {
     if(k === 1){
      gsap.from(svcerem.current, {
        scale:0,
        duration:1,
        delay:0.50,
        transition:'all east out',
        x:"-10%",
        y:"-100%",




      });
      k = k + 1
     }

     
     


    

    
  
  };

  useEffect(() => {
    animatebox();
  }, []);


    return(
       <>
       
       <div className="namesvgi" ref = {svcerem}>
       swami vivekanand group of institutions indore

     
       
       </div>
</>
    );
}

export default Svginame