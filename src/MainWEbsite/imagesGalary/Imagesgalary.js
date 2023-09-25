import React from 'react';
import styles from './Imagesgalary.module.css'; // Import the CSS module

const Gallery = ({ arr }) => {
  console.log("imagesddsf", arr);

  return (
    <div className={styles.gallery}> {/* Use the styles object for class names */}
      {arr?.map((item) => (
        <div key={item.id} className={styles['gallery-item']}> {/* Use the styles object for class names */}
          <img src={item?.image} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
