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
        <h2 >SVCE Indore College Sports</h2>
        <div className="sport-info">
          {/* Add information about the college's sports */}
          <p>
          Introduction:

Welcome to the Sports Department at SVGI, Indore!
Discover a world of sports and fitness opportunities right here on our campus.
Featured Sports:

Highlight the main sports or activities available at SVGI. This could include cricket, basketball, football, athletics, badminton, and more.
Facilities:

Describe the state-of-the-art sports facilities at SVGI, such as a well-maintained sports ground, indoor courts, a gymnasium, and any specialized training areas.
Coaching Staff:

Introduce the dedicated and experienced coaching staff who guide our athletes to success.
Achievements:

Showcase the college's sports achievements, including championships, tournaments, and individual accomplishments.
Events and Tournaments:

Keep visitors informed about upcoming sports events, tournaments, and matches hosted by SVGI.
Fitness and Well-being:

Highlight the importance of physical fitness and well-being among students and encourage participation in sports and recreational activities.
Gallery:

Share a gallery of photos and videos capturing memorable moments from sports events and activities at SVGI.
News and Updates:

Regularly update the website with news and updates related to the sports department, such as match results, athlete profiles, and announcements.
Sports Clubs and Teams:

Provide information about various sports clubs and teams students can join.
Contact Information:

Include contact details for the sports department, coaches, and staff for inquiries and registrations.
Individual Sports Pages:

Create individual pages for each sport, including the following sections:

About the Sport: Briefly explain the sport and its significance at SVGI.
Facilities: Detail the facilities available for that particular sport.
Teams and Coaches: List the teams and introduce the coaches.
Achievements: Highlight past achievements in that sport.
Upcoming Events: Mention any upcoming matches, tournaments, or competitions.
Training and Practice: Describe the training schedules and practice sessions.
Joining the Team: Provide information for students interested in joining the sport.
          </p>
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
  