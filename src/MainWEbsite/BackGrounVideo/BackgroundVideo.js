import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BackgroundVideo.css'; // Import your CSS file
import video from './gg.mp4'; // Provide the correct path to your video file

const BackgroundVideo = () => {
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
        opacity:0




      });
      k = k + 1
     }

     
     


    

    
  
  };

  useEffect(() => {
    animatebox();
  }, []);

  return (
    <div className="background-video-container">
      <video autoPlay muted loop playsInline ref={svcerem} className="bright-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
