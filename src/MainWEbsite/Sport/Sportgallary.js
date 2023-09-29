import './Sportgallary.css'; // You'll create this CSS file for styling.
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import React, { useEffect} from 'react';

const SportsSection = () => {
    // Define animation for the headi
   const{sportarray,sportlist} = useContext(MyContext)
   console.log(sportarray)

   useEffect(() => {
    sportlist()
   },[])
    return (
      <div className="sports-section">

      <div className="svcegalalrybag">  
      <h1 >SVGI SPORTS</h1>
      
      
      </div>
    
        <div className="image-grid">
          {/* Add responsive images using CSS grid */}
          {/* You can map through an array of image URLs and create grid items */}
          {/* Example: */}

          {sportarray?.map((item)=>{
            return  <div className="grid-item">
            <img src={item?.image} alt="" />
          </div>
          })}
           
        </div>
      </div>
    );
  };
  
  export default SportsSection;
  