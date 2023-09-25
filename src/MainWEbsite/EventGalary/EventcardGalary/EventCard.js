// src/components/EventCard.js
import React, { useEffect, useState } from 'react';

import styles from './EventCard.module.css';
import { useContext } from 'react';
import { MyContext } from '../../../ADMINPANEL/CONTEXTAPI/mycontext';
import EventCarousel from '../Eventimg/EventCarousel';

const EventCard = () => {
    const { getEventlist, Eventdatata } = useContext(MyContext)



    useEffect(() => {
        getEventlist()

    }, [])
    return (
        <>
           <div className={styles.eventheadline}>Our Events </div>
            {Eventdatata?.map((item) => {
                return <div className={styles.eventCard}>
                <div className={styles.eventimagebox}>
                <img src={item?.image} alt="ko" className={styles.eventImage} />
                
                
                
                
                </div>
                    <h2>Event Name  {item?.eventname}</h2>
                    <p className={styles.eventDate}><b>Event Date  {item?.event_date} </b></p>
                <EventCarousel images ={item?.images}/>

                </div>



            })}




        </>


    );
};

export default EventCard;
