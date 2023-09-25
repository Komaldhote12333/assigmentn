import './Placementdata.css';
import CardComponentStudent from '../Placedstudentcard/cardplaced';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { MyContext } from '../../../ADMINPANEL/CONTEXTAPI/mycontext';
import TPOAbout from '../Abouttpo/Abouttpo';
import Owerecruter from '../../OwrRecruter/OwerRecruter';

const Placedsudentgrid = () => {
  let { userId } = useParams();
  const { CommonGetbyid, collegeobjarr,yeardataarray,Yearlist } = useContext(MyContext);

  useEffect(() => {
    CommonGetbyid("CollegeList", userId);
    Yearlist();

  }, [userId]);
 
  // Reverse the placedstudentclg array
  const reversedPlacedstudentclg = collegeobjarr?.placedstudentclg?.slice().reverse();

  return (
    <>
      {yeardataarray?.map((year) => {
        return (
          <div className="mainplacedatabyyear" key={year.year}>
            <div className="placedyear animate-charcter">{year.year}</div>
            <div className="placedtext">Placement</div>
            <div className="grid-container">
              {year?.placements?.map((item) => {
                return (
                  <CardComponentStudent
                    key={item.id}
                    id={item.id}
                    companyName={item.company_name}
                    jobRole={item.job_role}
                    packageLpa={item.pakageLpa}
                    studentName={item.studentname}
                    package={item.package}
                    college={item.college}
                    image={item.image}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <Owerecruter />
      <TPOAbout
        name={collegeobjarr.principalname}
        image={collegeobjarr.hprincipaldimg}
        about={collegeobjarr.Aboutprincipal}
      />
    </>
  );
};

export default Placedsudentgrid;
