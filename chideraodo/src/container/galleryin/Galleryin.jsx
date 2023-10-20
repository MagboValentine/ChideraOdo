import React from 'react';
import'./galleryin.css';

import { Contact } from '../../container';

import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'
import pic7 from '../../assets/pic7.jpg'
import pic8 from '../../assets/pic8.jpg'
import pic9 from '../../assets/pic9.jpg'

const Galleryin = () => {
  return (
    <div className="gallery_bg">
      <div className="co__galleryin">

        <div className="co__galleryin_img">
          <img src={pic1} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic2} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic3} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic4} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic5} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic6} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic7} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic8} alt="Omeogo" />
        </div>

        <div className="co__galleryin_img">
          <img src={pic9} alt="Omeogo" />
        </div>

      </div>
      <Contact />
    </div>
  )
}

export default Galleryin