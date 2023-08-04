import { Routes, Route } from "react-router-dom"

import Login from "./INTERSHALA/Login";
import Register from "./INTERSHALA/Register";
import Events from "./INTERSHALA/Events";
import CreateEventForm from "./INTERSHALA/CreateEventForm";
const App = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>  } />
        <Route path="/Register" element={<Register/>  } />

        <Route path="/Events" element={<Events/>  } />

        <Route path="/login" element={<Login/>  } />
        <Route path="/cef" element={<CreateEventForm/>  } />


      
        
    
        </Routes>
  );
};

export default App;
