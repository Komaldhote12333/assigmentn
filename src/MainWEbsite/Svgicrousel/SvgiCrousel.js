import './SvgiCrousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react';


const SvgiCrousel = () => {
    const svgiarr =[
        {
            image:"https://vivekanandgroup.com/images/card-pic-eng.jpeg",
        },

        {
            image:"https://media.getmyuni.com/azure/college-images-test/swami-vivekanand-college-of-engineering-svce-indore/ef7125fe6c6d407381927a938ca040c3.jpeg",
        },


        {
            image:"https://static.zollege.in/public/college_data/images/appImage/10110_SVCP_New.jpg?tr=h-250,w-400,c-force",
        },


        {
            image:"https://vivekanandgroup.com/images/card-pic-eng.jpeg",
        },

        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbjJPzDPj-3Yp3rQ4zupvF7agyktcgHzTiW_3j3fmfoYOB3lk1NYEMm4Hn3WTMk3L-ug&usqp=CAU",
        },

        {
            image:"https://vivekanandgroup.com/images/card-pic-eng.jpeg",
        },
    ]

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
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
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
      {svgiarr?.map((item) => {
        return (
          <div>
            <div className="SVgibox">
              <div className="imgsvgi"><img src={item?.image} alt="" /></div>

            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SvgiCrousel;
