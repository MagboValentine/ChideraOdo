import React from 'react';
import './achievements.css';
import image2 from '../../assets/image2.png';
// import imagebg from '../../assets/imagebg.jpg';

const Achievements = () => {
  return (
    <div className="background">
    <div className="co__achievements">
      <div className="co__achievements_content">
        <h1>Achievements</h1>
        <p>Hon. Chidera Odo has made significant contributions to our state during his career
           as a Special Adviser to the Enugu State Governor on Foreign Affairs and SLS to 
           Sen. Chimaroke Nnamani (Enugu-East Senatorial Zone). These postion lead to successes 
           which include advancements in community development, infrastructure, healthcare, 
           education and most especially Human Capital Development.
        </p>
      </div>
      <div className="co__achievements_img">
        <img src={image2} alt="Omeogo" />
      </div>
    </div>
    </div>
  )
}

export default Achievements