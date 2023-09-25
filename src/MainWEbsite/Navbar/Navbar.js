import './Navbar.css';
import React, { useEffect, useRef } from 'react';

import  { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";

const Navbar = () => {

  const navbarRef = useRef(null);
  const mnavRef = useRef(null);

  const svcerem = useRef(null);


  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Customize your scroll threshold to change the navbar color
      if (scrollY > 10) {
        gsap.to(navbarRef.current, { backgroundColor: '#cf1578', duration: 1.5 });
      } else {
        gsap.to(navbarRef.current, { backgroundColor: '#000000', duration: 1.5 });
      }

      // Blur effect on the main content
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const{Collegedata} = useContext(MyContext)
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAboutDropdownOpen2, setIsAboutDropdownOpen2] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleAboutDropdown2 = () => {
    setIsAboutDropdownOpen2(!isAboutDropdownOpen2);
  };



  var k =1

  const animatebox = () => {
     if(k === 1){
      gsap.from(svcerem.current, {
        scale:0,
        duration:1,
        delay:0.50,
        transition:'all east out',

      });
      k = k + 1
     }

     
     


    

    
  
  };

  useEffect(() => {
    animatebox();
  }, []);

  return (
    <nav className="navbar"  ref={navbarRef}>
      <div className="navbar-logo" ref={svcerem} >
      <div className="clglogo">
      <img className="clgimg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAUGAgMHAf/EADEQAAEDAwIEBQIFBQAAAAAAAAECAwQABRESIQYTMUEUIlFhcRWRMlKBobEjYsHR8f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAKBEAAgIBAQYGAwAAAAAAAAAAAQIAEQMxBBIhQaHwUXGBscHxEyIy/9oADAMBAAIRAxEAPwDuNFFVudKevshy2293ksNq0yXkq849h+U9wevT0VhgXCSE+/QISihThddBxymhqOcE49AcA9TS3159RZU3a5Sm3HHUk6Dkacae2Bqz3ONq225u2wpciFFSPGNpDzmr8atWdx7ZzsNhmtX10ePtEPSnVODutX5ShOcD5JqDlQMF5zRcTtoO6v2jEDiCBOdSyhS23ycBp1GFdz/Az9qlc5qNW1EuS3y6wk8sKZDx/EMjCtJ7VHpcVw9KZYXn6YtOA4peSlW3X0AAAA2GATuaasri1kEEayxUV4lQUkKScgjINFOKJXuQqLapTreOYGyEZSVDUdhsOu5FJxpke32qIi6Twy4+2dLshekk4zjJ7jPfesuKoxmWrwp5XLecShYcSsg56Dybjzad+lM3GMiRDDDsJmWjbLbmMfvUuwCmWgG8N7SUHjW8w2GUXJuWy9cIikoZehvj+pqzhK8Z2wFH9CO9VJVz4umSYM+PpkLczIZQxEQoM7kb5TtnSe++OtSvGUKNLZXbrRFjJfRMaDxaOEt5ygfPmWB96tvDnhrM21HbQotoaDSnNOTtvn7k7e9LZQo2f8lW1nXXvrNtqdlyhATQHQyGsFwev0iM7dYy248QqU9DKSNUnbGUq3xghQz03G/e/wAlh25215mQylpS0+QE6sHsT0qlyZTtxu8+RYZAjlLqGHnSwCStCckgEdcLSMnfbHQCrVw4240lwPXSZMXgakSUpGk+owM/ua5MTqucoDXgvpNcw38KuSOHn9TZwrJMi0oScf0TysheonAGM++CP570V7w7HMduYkuawqWsgAKGnptv/jb5617XcSDxE4dJKOJ1II79jSk+L9ShqY8TIjatlKjqCVe4zg07WpaFBWtGM9x61JHONSQbEofFtpYtvDMuJAaXEjLCWeYkaluqUoZ7gq2GOv7bVRuKoFx4LTFjt3txYeKhy1JCcEBJJTknbzf9zXZrwm3rZakXTUGYjqXQk5xq6JJA64J+KQl3WzSfFa56wlbBQooQvypOfMDj7H12qMSsmn7KTZHDw+OE2d1yAFv65nv1lL4GaudytMW4Qru4zKW44klQ1NOLSrGlYH9oTXToy3fCNOS20okFA5iEnICu4B+a0W2XCkxEGEsutNnQDpOSQB6jf5ptKVKUFL2x0T6U6Idq59JL5N5QtaTJpOlAB69T80VnRVgUKmUKKKKcInc4i5sfkpUgJJyoLQFA+m3scH9KRTYGUFwpbjalEaFcgeUdx7jH+6KKI7jlsgqgtlsKb5fUIQ3pAPc9aeooogTcKKKKIp//2Q==" alt="" />
      </div>
      </div>
      <div  ref={mnavRef}  className={`navbar-links ${isNavOpen ? 'opennav' : ''}`}>
        <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to = "/" >Home</Link>




        <div className="drpdown" onClick={toggleAboutDropdown2}>
        <a href="#" >About</a>
       

        {isAboutDropdownOpen2 &&
          <div className="dropdwomlist">
         
         
          <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Sport" >
            Sport
          </Link>

          <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Galary" >
          Galary
          </Link>

          <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Events" >
          Events
        </Link>

        <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Achivement" >
        Achivement
        </Link>

        <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Liblary" >
        Liblary
      </Link>

      <Link onClick={()=>{
        setIsNavOpen(!isNavOpen);
      }} to="login" >
      Login
    </Link>
       

     
      </div>
        
        }
          

        
        
        
        
        
        </div>

        <div className="drpdown" onClick={toggleAboutDropdown}>
        <a href="#">Cources</a>
       

        {isAboutDropdownOpen && 
          <div className="dropdwomlist">
          {Collegedata.map((item) => {
          if ( item.name != 'TNP'){
            return (
              <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to={`/CourcesListwise/${item.id}`} key={item.id}>
                <a href="#">{item.name}</a>
              </Link>
            );
          }
            
          })}
         
          </div>

        } 
        
        
        
        
        </div>
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




    
        
        <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Addmision" >
        Addmision
      </Link>
      
      <Link onClick={()=>{
          setIsNavOpen(!isNavOpen);
        }} to="Contact" >
      Contact
    </Link>
      </div>
      <div className="navbar-hamburger" onClick={toggleNav}>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open3' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open2' : ''}`}></div>

      </div>
    </nav>
  );
};

export default Navbar;
