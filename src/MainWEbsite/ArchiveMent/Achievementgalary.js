
import styles from './Achievement.module.css';
import { useContext } from 'react';
import  { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';


const Achievement = () => {
  // Sample data for upcoming events

 const{AchievementsListdata,getsetAchievementsList} = useContext(MyContext)

  
useEffect(()=>{
  getsetAchievementsList()
},[])

  gsap.registerPlugin(ScrollTrigger);
  const contentRefeventAchivement = useRef([]);


  const Archivmentcmakearr =(el) =>{
    if(el && !contentRefeventAchivement.current.includes(el)){
      contentRefeventAchivement.current.push(el)
    }
   console.log("archivemt ",contentRefeventAchivement.current)
  }


  const animateImageAchivement = () => {



    gsap.to(contentRefeventAchivement.current, {
      duration: 1,
      scale: 1,
      transition: 'all',

      scrollTrigger: {
        trigger: contentRefeventAchivement.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub:"Infinity",
      },
    });

};

  animateImageAchivement();

  return (
    <section className={styles.upcomingEvents}>
      <h2>Our Achievement</h2>
      {AchievementsListdata?.map((item) => (
     <div className={styles.archivementbox}>
     <div className={styles.dottext}></div>
     <div className={styles.archivemnttext}>{item?.name}</div>
     </div>
     ))}
      <div className={styles.gallery}> {/* Use the styles object for class names */}
      {AchievementsListdata?.map((item) => (
        <div key={item.id} className={styles['gallery-item']}> {/* Use the styles object for class names */}
          <img src={item?.image} alt="images" />
        </div>
      ))}
    </div>


    </section>
  );
};

export default Achievement;
