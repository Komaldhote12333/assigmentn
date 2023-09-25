import React from 'react';
import './Abouttpo.css';

const TPOAbout = ({about,image,name}) => {
  return (
    <div className="tpo-about">
      <img
        src={image}
        alt="TPO Logo"
        className="tpo-image"
      />
      <div className="tpo-info">
        <h2> TPO NAME {name}</h2>
        <h3>ABOUT TPO</h3>

        <p>
        {about}
        </p>
      </div>
    </div>
  );
};

export default TPOAbout;
