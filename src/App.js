import { Routes, Route } from "react-router-dom"

import LoginPage from "./ADMINPANEL/LOGIN/login";
import UserForm from "./ADMINPANEL/CREATE USER/Userform";
import Dashboard from "./ADMINPANEL/ADMINDASHBOARD/Dashbord";
import Tpoadmin from "./ADMINPANEL/TPODashBoard/TpoAdmin";
import Navbar from "./MainWEbsite/Navbar/Navbar";
import Navbarmenu from "./MainWEbsite/Navbar/Navbar";
import BackgroundVideo from "./MainWEbsite/BackGrounVideo/BackgroundVideo";
import Svginame from "./MainWEbsite/SvgiName/Svginame";
import Footer from "./MainWEbsite/Footer/Footer";
import Cources from "./MainWEbsite/Cources/Cources";
import AboutSpecficcourc from "./MainWEbsite/Aboutdepartment/Aboutdepartment";
import Facultycrousel from "./MainWEbsite/Facultycrousel/Facultycrousel";
import Loader from "./Loader/Loader";
import { MyContext } from "./ADMINPANEL/CONTEXTAPI/mycontext";
import { useContext } from 'react';
import Placedsudentgrid from "./MainWEbsite/Placement/Placementdata/Placementdata";
import SportsSection from "./MainWEbsite/Sport/Sportgallary";
import Svgigalary from "./MainWEbsite/Svgigalary/Svgigalary";
import EventCard from "./MainWEbsite/EventGalary/EventcardGalary/EventCard";
import SvgColor from "./MainWEbsite/SvgColor/Svgcolor";
import ImageGrid from "./MainWEbsite/FacilitysBottom/ImageGrid";
import UpcomingEvents from "./MainWEbsite/UpcoomingEvent/UpcoomingEvent";
import Achievement from "./MainWEbsite/ArchiveMent/Achievementgalary";
import Owerecruter from "./MainWEbsite/OwrRecruter/OwerRecruter";
import UpdateCollegeform from "./ADMINPANEL/College/UpdateClg";
import UpdateCource from "./Cources/UpdateCpurces";
import RegistrationForm from "./MainWEbsite/AddmisionForm/RegistrationForm";
import ContactUs from "./MainWEbsite/Contactus/Contactus";
import AboutCollege from "./MainWEbsite/Aboutclghistory/Aboutclghistory";
const App = () => {

  const{isloading} = useContext(MyContext)
  console.log("app component")
  return (
    <>
<Navbar/>
<Routes>


     <Route path="/" element={<div>
    <Svginame/>                                                 
    <AboutCollege/> 
    <UpcomingEvents/>
    <Owerecruter/>
   <ImageGrid/>
      
      </div>} />

    <Route path="/login" element={<LoginPage />} />
    <Route path="/kdd" element={<Facultycrousel/> } />
    <Route path="/sport" element={<SportsSection/> } />
    <Route path="/Galary" element={<Svgigalary/> } />
    <Route path="/Events" element={<EventCard/> } />
    <Route path="/Achivement" element={<Achievement/> } />
    <Route path="/Addmision" element={<RegistrationForm/> } />
    <Route path="/Contact" element={<ContactUs/> } />






    <Route path="/useform" element={<Dashboard />} />
    <Route path="/tpoform" element={<Tpoadmin />} />
    <Route path="/CourcesListwise/:userId" element={<Cources />} />
    <Route path="/updateclg/:id" element={<UpdateCollegeform />} />
    <Route path="/updatecource/:id" element={<UpdateCource/>} />

    


    <Route path="/CourceSpecificView/:userId" element={<AboutSpecficcourc />} />
    <Route path="/Placementdata/:userId" element={<Placedsudentgrid />} />






   




    </Routes>
    <Footer/>

<br />

    
    </>
   
   
  );
};

export default App;
