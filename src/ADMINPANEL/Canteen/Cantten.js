import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
import styles from './Canteen.module.css'; // Import CSS module

const Cantten = () => {
  const { Commonpostfunction, CommonDelete, Collegedata, canteenarray, Canteenlist } = useContext(MyContext);
  const [CanttenData, setCanttenData] = useState({
    name: '',
    college: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCanttenData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];

    setCanttenData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  useEffect(() => {
    Canteenlist();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', CanttenData.image);
    formDataToSend.append('college', CanttenData.college);
    formDataToSend.append('name', CanttenData.name);

    Commonpostfunction('CanteenList/', formDataToSend);
    console.log(CanttenData);
    Canteenlist();
  };

  return (
    <div className={styles.container}>
      <h2>Create Compony</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Image Upload:
          <input
            type="file"
            onChange={handleImageUpload}
            className={styles.fileInput}
          />
        </label>
        <br />
        <label>
          ComponyName :
          <input
            type="text"
            name="name"
            value={CanttenData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          College:
          <select
            name="college"
            value={CanttenData.college}
            onChange={handleChange}
          >
            <option value="">Select College</option>
            {Collegedata?.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>
          Create Compony
        </button>
      </form>

      <div className={styles.tablecontainer}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {canteenarray?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>
                  <span
                    onClick={() => {
                      CommonDelete('CanteenList', item?.id);
                      Canteenlist();
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

export default Cantten;
