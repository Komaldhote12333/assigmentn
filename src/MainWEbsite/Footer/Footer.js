import './Footer.css';
import svgi from  './svgiimg.png';
import nikhil from  './nikhil.jpg';
import rohit from  './rohit.jpg';
import ravindra from  './ravindra.jpg';
import komal from  './komal.jpeg';
import circule from  './circule.png';
import rehan from  './rehan.jpg';



import { Link } from "react-router-dom";
import  { useState } from 'react';

import React, { useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { gsap } from 'gsap';

const Footer = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const{Collegedata} = useContext(MyContext)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <>
      <section id="footer">

        <div className="main-footer">

        <div className="logoinfo" data-aos="fade-up">
        <h2>SVGI INDORE</h2>

        <div className="svgilogomainbox">
        <img src={svgi}  className="bacgrounimgror1" alt="" />
        <img src={circule} alt="" className="bacgrounimgror" />



        </div>


      </div>
        
          <div className="logoinfo" data-aos="fade-up">


            <div className="contact-details">
              <h1>Contact Us</h1>
              <ul>
              
                <li>
                  <div className="fa fa-phone"></div>
                  <a href="tel:+9098268693">+91 9098268693</a>
                </li>
                <li>
                  <div className="fa fa-envelope"></div>
                  <a href="mailto:yourmail@gmail.com">komaldhote9165@gmail.com</a>
                </li>
              </ul>


              <h4 className="developedby">Developed By </h4>


  <div className="devlopedbypesonimage">
   <marquee behavior="" direction="">
   
   <div className="marqueflex">
   
  <div className="developerboxeach">
  <div className="developerimgcircule"><img src={komal} alt="" /></div>
  <div className="developername">komal dhote </div>
  
  </div>
   

  <div className="developerboxeach">
  <div className="developerimgcircule"><img src={ravindra} alt="" /></div>
  <div className="developername">Raveendra Patidadar</div>
  
  </div>
   


  <div className="developerboxeach">
  <div className="developerimgcircule"><img src={rohit} alt="" /></div>
  <div className="developername">Rohit Prajapati</div>
  
  </div>
   





  <div className="developerboxeach">
  <div className="developerimgcircule"><img src={rehan} alt="" /></div>
  <div className="developername">Mohd Rehan Qureshi</div>
  
  </div>


  








   
   </div>
   
   </marquee>
   
   
   
   
  </div>


              
  





            </div>
            
          </div>
          <div className="com" data-aos="fade-up">
            <h1>About</h1>
            <ul>
              <li>
              <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to = "/" >Home</Link>
              </li>
              <li>
              <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to="Sport" >
                  Sport
                </Link>
              </li>
              <li>
              <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to="Galary" >
                Galary
                </Link>
              </li>


              <li>
                <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Events" >
          Events
        </Link>


              </li>


              <li>
              <Link onClick={()=>{
        setIsNavOpen(!isNavOpen);
      }} to="Achivement" >
      Achivement
      </Link>


            </li>


            



              <li>
 <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Liblary" >
        Liblary
      </Link>

              
              </li>
  <li>
  
  <Link onClick={()=>{
    setIsNavOpen(!isNavOpen);
  }} to="login" >
  Login
</Link>
  </li>
            

              <li>
              {Collegedata.map((item) => {
                if (item.name === 'tnp' || item.name === 'TNP'){
                  return (
                    <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to={`/Placementdata/${item.id}`} key={item.id}>
                    Placement
                    </Link>
                  );
      
                }
               
              })}
              </li>



              <li>
              <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to="Addmision" >
              Addmision
            </Link>
              </li>



              <li>
              <Link onClick={()=>{
                setIsNavOpen(!isNavOpen);
              }} to="Contact" >
            Contact
          </Link>
              </li>



            
            


            
            </ul>
          </div>



          
          <div className="info" data-aos="fade-up">
            <h1>Social Media</h1>
            <div className="sociallogos">
              <div className="logobox">
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-youtube-play"></a>
              </div>
            </div>
          </div>

          
        </div>


        
        <footer>© Your Copyright 2026 All Rights Reserved To SWAMI VIVEKANAND GROUP OF INSTITUTIONS INDORE</footer>
      </section>
    </>
  );
};

export default Footer;
