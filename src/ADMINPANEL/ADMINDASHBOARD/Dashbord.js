import Cource from "../../Cources/Cources"
import FacultyForm from "../../Faculty/Faculty"
import Achievements from "../Achievements/Achievements"
import Bus from "../Buses/Bus"
import UserForm from "../CREATE USER/Userform"
import Cantten from "../Canteen/Cantten"
import Collegeform from "../College/College"
import DepartmentForm from "../DEPARTMENT/Department"
import EventForm from "../Events/Event"
import EventImagesForm from "../EventsImages/EventSpecificImages"
import GalleryForm from "../Gallery/Gallery"
import Sport from "../Sport/Sport"
import Subcollege from "../SubColllege/Subcollege"
const Dashboard = () => {
    return(
<>
<UserForm/>
<Collegeform/>
<EventForm/>
<GalleryForm/>
<Achievements/>
<Bus/>
<Sport/>
<Subcollege/>
<Cource/>
<FacultyForm/>
</>
    )
}

export default Dashboard