import './Owrrecruter.css';
import React, { useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';


const Owerecruter = () => {

  const{canteenarray,Canteenlist} = useContext(MyContext)


  useEffect(() => {
    Canteenlist();
  }, []);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
      <> <div className="toprecruterheading">Our Top Recruter </div>
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        swipeable={true}
    draggable={true}
      >  
      {canteenarray?.map((item)=>{
        return   <div className="compony_box">
  
        <img src={item?.image} alt="" />
        
        
        
        </div>
      })}







      </Carousel>
      <div className="toprecruterheading">300 + Companies Visited </div>
      </>
    )
}
export default Owerecruter
