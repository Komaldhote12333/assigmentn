import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './GalleryForm.module.css'
const GalleryForm = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, galarydata,getsetGallerylist} = useContext(MyContext)
  const { Postfunction, token } = useContext(MyContext)
  const [GalleryListtData, setGallerydata] = useState({
    name: '',
    image: '',
    college: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGallerydata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    
    setGallerydata((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };



  useEffect(()=>{
    getsetGallerylist()

  },[])
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', GalleryListtData.name);

    formDataToSend.append('image', GalleryListtData.image);
    console.log("SportData.name:", GalleryListtData.name);
    formDataToSend.append('college', GalleryListtData.college);


    Commonpostfunction("GalleryList/", formDataToSend)
    getsetGallerylist()
    // You can perform form submission logic here, like sending data to a backend API
    console.log(GalleryListtData);
  };

  return (
    <div className={styles.container}>
  <h2>Create Gallery</h2>
  <form onSubmit={handleSubmit}>
    <label>
      Gallery Name:
      <input
        type="text"
        name="name"
        value={GalleryListtData.name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Image Upload:
      <input
        type="file"
        onChange={handleImageUpload}
      />
    </label>
    <br />
    <label>
      College:
      <select
        name="college"
        value={GalleryListtData.college}
        onChange={handleChange}
      >
        <option value="">Select College</option>
        {Collegedata?.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </select>
    </label>
    <br />
    <button type="submit">Create Gallery</button>
  </form>

  <div className={styles.tablecontainer}>
    <table>
      <thead>
        <tr>
          <th>Delete</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {galarydata?.map((item) => (
          <tr key={item?.id}>
            <td onClick={() => CommonDelete("GalleryList", item?.id)}>Delete</td>
            <td>{item?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default GalleryForm;
