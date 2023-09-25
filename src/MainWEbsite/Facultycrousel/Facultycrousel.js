import './Facultycrousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react';


const Facultycrousel = () => {

  const{Facultyarray,Facultylist} = useContext(MyContext)
  useEffect(() => {
    Facultylist()
  },[]);

  console.log(Facultyarray);

  if (!Facultyarray ) {
  
    return null; 
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      swipeable={true}
  draggable={true}
    >
      {Facultyarray?.map((item) => {
        return (
          <div>
            <div className="facultybox">
              <div className="imgfac"><img src={item?.image} alt="" /></div>
              <div className="detailsf">
                <div className="namefac">NAME {item?.name}</div>
                <div className="rolefac">ROLE {item?.role}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Facultycrousel;
