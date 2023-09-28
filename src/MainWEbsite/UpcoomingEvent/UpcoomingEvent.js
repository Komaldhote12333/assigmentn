// src/UpcomingEvents.js
import React from 'react';
import styles from './UpcomingEvents.module.css';
import  { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';



const UpcomingEvents = () => {
  // Sample data for upcoming events

  const {UpccomingEventArray,UpcommingEventws} = useContext(MyContext)



  useEffect(() => {
    UpcommingEventws()
   },[])



  
  gsap.registerPlugin(ScrollTrigger);
  const contentRefevent = useRef([]);


  const Eventcmakearr =(el) =>{
    if(el && !contentRefevent.current.includes(el)){
      contentRefevent.current.push(el)
    }
   
  }


  const animateImagesEvent = () => {



    gsap.to(contentRefevent.current, {
      duration: 1,
      scale: 1,
      transition: '1 east in out',

      scrollTrigger: {
        trigger: contentRefevent.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub:false,
      },
    });

};


  animateImagesEvent();

  if( UpccomingEventArray.length === 0){
    return null
   }
  return (
    <section className={styles.upcomingEvents}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventList}>
        {UpccomingEventArray.map((event, index) => (
          <div className={styles.eventCard}    key={index}>
          <div className={styles.eventimagesbox}>
          
          <img
          src={event.image}
          alt={event.eventname}
          ref={Eventcmakearr}
          className={styles.eventImage}
        />
          </div>
        
            <div className={styles.eventInfo}>
              <h3>{event.eventname}</h3>
              <p>Date: {event.event_date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
