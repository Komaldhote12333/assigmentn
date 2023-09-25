import { createContext, useState } from 'react';
import { useEffect } from 'react';
export const MyContext = createContext("");


const Globledata = ({children}) => {
   const token =localStorage.getItem("token")
   const [departmentdata , setdepartmentdata] = useState([])
   const [Collegedata , setCollegedata] = useState([])
   const [Eventdatata , setEventdata] = useState([])
   const [galarydata , setGalaarydata] = useState([])
   const [AchievementsListdata , setAchievementsList] = useState([])
   const [canteenarray , setcanteen] = useState([])
   const [busarray , setbusaaray] = useState([])
   const [sportarray , setsportarray] = useState([])
   const [subcollegearray , setsubcollege] = useState([])
   const [coursees , setcources] = useState([])
   const [yeardataarray , setyeardata] = useState([])
   const [placementdata , setplacementdata] = useState([])
   const [Facultyarray , setFacultyList] = useState([])
   const [isNavOpen, setIsNavOpen] = useState(false);
   const [Subcollegecourcesarray , setCourcessubclgarray] = useState([])
   const [specificcourcesarray , setspecificcourcearray] = useState([])
   const [UpccomingEventArray , SetUpcomingEvent] = useState([])
   const [collegeobjarr , collegeobj] = useState([])
   const [usersdataarray , setusersdata] = useState([])
   const [subcollegegeobj , setsubcollegegeobj] = useState([])


   const[isloading , setisloading] = useState(false)










   





  const [error, setError] = useState('');

    //for post method 
    const Postfunction = async (endpoint, objectdata) => {
        try {
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(objectdata),
          });
      
          console.log(response.status); // Log the response status
           const responseData = await response.json(); // Log or use the response data
          if (response.ok) {
            // Handle successful response
            alert("user added succesfuly")
          } else {
            console.log("Problem in response:", responseData);
            alert("Problem in response");
          }
        } catch (error) {
          console.error("Error:", error);
          
        }
      };
      
      
      const Commonpostfunction = async (endpoint, formData) => {
        setisloading(true);
        try {
          const headers = {
            'Authorization': `Bearer ${token}`,
          };
      
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}`, {
            method: 'POST',
            headers: headers,
            body: formData,
          });
      
          console.log(response.status); // Log the response status
          const responseData = await response.json(); // Log or use the response data
      
          if (response.ok) {
            setisloading(false);
      
            // Handle successful response
             alert(`Data added successfully to ${endpoint}`);
          } else {
            setisloading(false);
      
            console.log("Problem in response:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
     

      const CommonDelete = async (endpoint , id) => {
        setisloading(true)
        try {
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}/${id}/`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,

            },
          });
    
          if (response.ok) {
            setisloading(false)

            setError('Item deleted successfully');
          } else {
            setisloading(false)

            setError('Error deleting item');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred');
        }
      };



      const CommonGetbyid = async (endpoint , id) => {
        setisloading(true)
        try {
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}/${id}/`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',

            },
          });
    
          if (response.ok) {
            const data = await response.json();
            if (endpoint === "CourseList"){
              setisloading(false)
              setspecificcourcearray(data)
            
            }

            else if (endpoint === "CollegeList"){

              collegeobj(data)
              setisloading(false)

              
            }

            else if (endpoint === "SubcollegeList"){
              setisloading(false)
             
             setsubcollegegeobj(data)
             
              
            }

          
            else{
              setisloading(false)

              setCourcessubclgarray(data)

            }
            setError('Item goted successfully');
          } else {
            setisloading(false)

            setError('Error not item');
          }
        } catch (error) {
          setisloading(false)

          console.error('Error:', error);
          setError('An error occurred');
        }
      };




      
      const CommonGetbyidforcr = async (endpoint , id) => {
        setisloading(true)
        try {
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}/${id}/`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',

            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setCourcessubclgarray(data)

        setisloading(false)
            
            setError('Item goted successfully');
          } else {
            setisloading(false)

            setError('Error not item');
          }
        } catch (error) {
          setisloading(false)

          console.error('Error:', error);
          setError('An error occurred');
        }
      };



      const Commonputbyid = async (endpoint, id, formData, ) => { // Added 'token' as a parameter
        setisloading(true);
        try {
          const headers = {
            'Authorization': `Bearer ${token}`,
          };
      
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}/${id}/`, {
            method: 'PUT',
            headers: headers,
            body: formData,
          });
      
          console.log(response.status); // Log the response status
          const responseData = await response.json(); // Log or use the response data
      
          if (response.ok) {

            setisloading(false);
      
            // Handle successful response
             alert(`Data added successfully to ${endpoint}`);
          } else {
            setisloading(false);
      
            console.log("Problem in response:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      

      const Yearlist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/YearStudentList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setisloading(false)

              setyeardata(data)
              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
  



      const getdatadepartment = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/DepartmentList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setdepartmentdata(data)
              setisloading(false)

              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
      



      
      const getCollegelist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/CollegeList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setCollegedata(data)
              setisloading(false)

              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
 
     
      const getEventlist = async () => {
        setisloading(true)

        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/EventList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setisloading(false)

              setEventdata(data)
              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
 
     

      const getsetGallerylist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/GalleryList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setGalaarydata(data)
              setisloading(false)

              
            } else {
              setisloading(false)

              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
 

      const getsetAchievementsList = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/AchievementsList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setAchievementsList(data)
              setisloading(false)

              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }
     
 
      const Canteenlist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/CanteenList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setcanteen(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');     
                     setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');        
                setisloading(false)

          }
    
      }
     


      const buslist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/BusesList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setbusaaray(data)
              setisloading(false)

              
            } else {
              setisloading(false)

              setError('problem in faching data');
            }
          } catch (error) {
            setisloading(false)

            setError('problem in faching data');
          }
    
      }

      const sportlist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/SportImagesList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setsportarray(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }


      const subcollegelistt = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/SubcollegeList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setsubcollege(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }


      const Curselist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/CourseList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setcources(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }
  


      
      const Placedstudenylist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/StudentPlacementList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setplacementdata(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }


      const Facultylist = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/FacultyList/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setFacultyList(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }


      
      const UpcommingEventws = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/EventListUpcooming/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (response.ok) {
              const data = await response.json();
              SetUpcomingEvent(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }




            
      const usersdata  = async () => {
        setisloading(true)
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/Create_admins', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,

              },
            });
        
            if (response.ok) {
              const data = await response.json();
              setusersdata(data)
              setisloading(false)

              
            } else {
              setError('problem in faching data');
              setisloading(false)

            }
          } catch (error) {
            setError('problem in faching data');
            setisloading(false)

          }
    
      }




      const AdmisinAddFunction = async (endpoint, formData) => {
        setisloading(true);
        try {
         
      
          const response = await fetch(`https://komaldhotepythonanywhere.pythonanywhere.com/${endpoint}`, {
            method: 'POST',
            body: formData,
          });
      
          console.log(response.status); // Log the response status
          const responseData = await response.json(); // Log or use the response data
      
          if (response.ok) {
            setisloading(false);
      
            // Handle successful response
             alert(`Data added successfully to ${endpoint}`);
          } else {
            setisloading(false);
      
            console.log("Problem in response:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
          setisloading(false);

        }
      };


      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };
    
  useEffect(()=>{
    getCollegelist()
  },[])


    return(

      <MyContext.Provider value={{ Postfunction, token,Commonpostfunction ,departmentdata ,CommonDelete ,getdatadepartment ,Collegedata ,getCollegelist,Eventdatata,getEventlist,galarydata,getsetGallerylist,AchievementsListdata,getsetAchievementsList,Canteenlist,canteenarray,buslist,busarray,sportlist,sportarray,subcollegearray,subcollegelistt,Curselist,coursees,yeardataarray,Yearlist,Placedstudenylist ,placementdata,Facultyarray,Facultylist,
      isNavOpen,toggleNav,CommonGetbyid,Subcollegecourcesarray,specificcourcesarray,isloading,UpccomingEventArray,UpcommingEventws,collegeobjarr,Commonputbyid  ,usersdataarray  ,usersdata,CommonGetbyidforcr,subcollegegeobj,AdmisinAddFunction
      
      
      }}>
        {children}
      </MyContext.Provider>
      

    )

}

export {Globledata}