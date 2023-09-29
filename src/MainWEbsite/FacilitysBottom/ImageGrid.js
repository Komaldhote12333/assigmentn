import React, { useRef, useEffect } from 'react';
import styles from './ImageGrid.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgColor from '../SvgColor/Svgcolor';


const ImageGrid = () => {
  const images = [
    { id: 1, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/digital-Library-min.jpg', text: 'DIGITAL LIBRARY' },
    { id: 2, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Digital-Classrooms-min.jpg', text: 'HAPPY CLASSROOM' },
    { id: 3, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Health-Care-min.jpg', text: 'HEALTH CARE' },
     { id: 4, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Canteen-min-1.jpg', text: 'SVGI CANTEEN' },

     { id: 5, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Transportation.jpg', text: 'TRANS PORTATION' },


     { id: 6, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Sports-min.jpg', text: 'SPORTS ACADEMY' },

     { id: 7, src: 'https://lnct.ac.in/wp-content/uploads/2021/09/Gmat.png', text: 'SVGI CANTEEN' },

  ];



  const images2 = [
    { id: 1, src:"https://i.postimg.cc/yxLHTxjg/celebrity-revisit.jpg", text: 'DIGITAL LIBRARY' },
    { id: 2, src: 'https://i.postimg.cc/JzfWx9Nq/spandan-2.jpg', text: 'HAPPY CLASSROOM' },
    { id: 3, src: 'https://i.postimg.cc/VNXPVD4c/spandan1.jpg', text: 'HEALTH CARE' },
     { id: 4, src: 'https://i.postimg.cc/cCLq6ZWs/spandan3.jpg', text: 'SVGI CANTEEN' },

     { id: 5, src: 'https://i.postimg.cc/QtsZG1nK/spandan5.jpg', text: 'TRANS PORTATION' },


     { id: 6, src: 'https://i.postimg.cc/DZgk20tj/spandan6.jpg', text: 'SPORTS ACADEMY' },

     { id: 7, src: 'https://i.postimg.cc/vZgsW-QVT/tarnyam9.jpg', text: 'SPORTS ACADEMY' },
     { id: 7, src: 'https://i.postimg.cc/4N3Zxv4z/tarunyam8.jpg', text: 'SPORTS ACADEMY' },

     { id: 7, src: 'https://i.postimg.cc/Fsnvdf1w/tarynyam2.jpg', text: 'SPORTS ACADEMY' },

   

  ];


  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef([]);
  const contentRef2 = useRef([]);


  const makearr =(el) =>{
    if(el && !contentRef.current.includes(el)){
      contentRef.current.push(el)
    }
   
  }

 
  const makearr2 =(el) =>{
    if(el && !contentRef2.current.includes(el)){
      contentRef2.current.push(el)
    }
   
  }

  const animateImages = () => {



      gsap.to(contentRef.current, {
        duration: 1,
        scale: 1,
        transition: 'all',

        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top bottom',
          end: '+2px top',
          scrub: 4,
        },
      });




      gsap.to(contentRef2.current, {
        duration: 1,
        scale: 1,
        transition: 'all',

        scrollTrigger: {
          trigger: contentRef2.current,
          start: 'top bottom',
          end: '+2px top',
          scrub: 4,
        },
      });
  
  };

  useEffect(() => {
    animateImages();
  }, []);

  return (

    <>
    
    <div className={styles.grid}>
      {images.map((image) => (
        <div className={styles.gridItem}  key={image.id}>
          <img ref={makearr} src={image.src} className={styles.shine}  alt="" />
          <p>{image.text}</p>
        </div>
      ))}
    </div>

    <div className={styles.Facilityheading}><h1>EXPERIENCE THE EXTRAORDINARY, EMBRACE LIFE AT SVGI GROUP OF COLLEGES!</h1></div>

    <div className={styles.grid}>
    {images2.map((image) => (
      <div className={styles.gridItem}  key={image.id}>
        <img ref={makearr2} src={image.src} className={styles.shine}  alt="" />
      </div>
    ))}
  </div>



    </>
  );
};

export default ImageGrid;
