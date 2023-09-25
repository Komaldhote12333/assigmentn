import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Achievements.module.css'; 
const Achievements = () => {
  const { Commonpostfunction, CommonDelete, Collegedata,AchievementsListdata,getsetAchievementsList } = useContext(MyContext)
  const [evenAchievementsdata, setAchievementsdata] = useState({
    image:'',
    name: '',
    college: null
  });


  const handleChange = (e) => {


    const { name, value } = e.target;
    setAchievementsdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    
    setAchievementsdata((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  useEffect(()=>{
    getsetAchievementsList()

  },[])
  const handleSubmit = (e) => {

    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', evenAchievementsdata.image);
    formDataToSend.append('name', evenAchievementsdata.name);

    formDataToSend.append('college', evenAchievementsdata.college);

    Commonpostfunction("AchievementsList/", formDataToSend)
    getsetAchievementsList()
    // You can perform form submission logic here, like sending data to a backend API
    console.log(evenAchievementsdata);
  };

  return (
    <div className={styles.container}> {/* Apply the container style */}
    <h2>Create Achievement</h2>
    <form onSubmit={handleSubmit} className={styles.form}> {/* Apply the form style */}
      <label>
        Image Upload:
        <input
          type="file"
          onChange={handleImageUpload}
          className={styles.fileInput} 
        />
      </label>

      <label>
      ARchivement Name:
      <input
        type="text"
        name="name"
        value={evenAchievementsdata.name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      College:
      <select
        name="college"
        value={evenAchievementsdata.college}
        onChange={handleChange}
      >
      <option value="">Select College</option>

        {Collegedata?.map((item) => {
          return <option value={item.id}>{item.name}</option>
        })}

      </select>
    </label>
      
      {/* ... (other form elements) */}
      
      <button type="submit" className={styles.submitButton}>Create Achievement</button> {/* Apply the button style */}
    </form>
    
    <div className={styles.tablecontainer}> {/* Apply the table container style */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {AchievementsListdata?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>
                <span
                  onClick={() => {
                    CommonDelete("AchievementsList", item?.id);
                    getsetAchievementsList();
                  }}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Achievements;
