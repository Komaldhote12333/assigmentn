import React, { useEffect } from 'react';
import gsap from 'gsap';
import './BackgroundVideo.css'; // Import your CSS file
import video from './gg.mp4'; // Provide the correct path to your video file

const BackgroundVideo = () => {
  const blurValue = 1;
  useEffect(() => {
    // Function to update the blur based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurValue = Math.min(scrollY / 10, 5); // Adjust the divisor and limit as needed
      gsap.to(".bright-video", {
        filter: `blur(${blurValue}px)`, // Apply blur based on scroll position
        duration: 0.5 // Adjust animation speed as needed
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="background-video-container">
{/*  <video autoPlay muted loop playsInline className="bright-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>  */}
    </div>
  );
};

export default BackgroundVideo;
