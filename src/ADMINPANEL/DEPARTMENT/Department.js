import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
const DepartmentForm = () => {
  const [name, setName] = useState();
  const{Commonpostfunction ,departmentdata ,CommonDelete ,getdatadepartment} = useContext(MyContext)
  const { Postfunction , token } = useContext(MyContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    Commonpostfunction("DepartmentList/", {name})
    getdatadepartment()

  }
  useEffect(()=>{
    getdatadepartment()

  },[])

  return (
    <div>
      <h2>Create Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        

      </form>
     {departmentdata?.map((item)=>{
        return(
            <div>
            <span onClick={()=>{CommonDelete("DepartmentList",item?.id)
            getdatadepartment()} }>delete</span>
             <span key = {item?.id} >{item?.name} </span>

             
            </div>
        )
     })}

    </div>
  );
};

export default DepartmentForm;
