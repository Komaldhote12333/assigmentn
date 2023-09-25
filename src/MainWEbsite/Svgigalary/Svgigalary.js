import './Svgigalary.css'; // You'll create this CSS file for styling.
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { useContext } from 'react';
import React, { useEffect} from 'react';


const Svgigalary = () => {
    // Define animation for the headi
   const{galarydata,getsetGallerylist} = useContext(MyContext)

   useEffect(() => {
    getsetGallerylist()
   },[])
    return (
      <div className="sports-section">
        <h2 >SVCE Indore College Galary</h2>
        <div className="sport-info">
          {/* Add information about the college's sports */}
        
        </div>
        <div className="image-grid">
          {/* Add responsive images using CSS grid */}
          {/* You can map through an array of image URLs and create grid items */}
          {/* Example: */}
       

          {galarydata?.map((item)=>{
            return  <div className="grid-item">
            <img src={item?.image} alt="" />
          </div>
          })}
           
        </div>
      </div>
    );
  };
  
  export default Svgigalary;
  