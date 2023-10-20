import React from 'react';
import './contact.css';

import Facebook from '../../assets/facebook.png';
import X from '../../assets/x.png';
import Instagram from '../../assets/instagram.png';
import Email from '../../assets/email.png';


const Contact = () => {
  return (
    <div  className="contact_bg" id="contact">
      <div className="co__contact">
        <h1>Contact</h1>
        <div className="co__contact_content">
          <div className="co__contact_content1">
            <div className="co__contact_content_img">
              <img src={Facebook} alt="Facebook" />
            </div>
            <div className="co__contact_content_text">
              <h1>Facebook</h1>
              <button><a href="https://www.facebook.com/honnwodo.chidera?mibextid=9R9pXO" target="_blank" rel="noreferrer"><p>Chidera Nwodo</p></a></button>
            </div>
          </div>

          <div className="co__contact_content1">
            <div className="co__contact_content_img">
              <img src={X} alt="X" />
            </div>
            <div className="co__contact_content_text">
             <h1>Twitter/X</h1>
             <button><a href="https://x.com/chideranwodo1/" target="_blank" rel="noreferrer"><p>@ChideraNwodo1</p></a></button>
            </div>
          </div>

          <div className="co__contact_content1">
            <div className="co__contact_content_img">
              <img src={Instagram} alt="Instagram" />
            </div>
            <div className="co__contact_content_text">
              <h1>Instagram</h1>
              <button><a href="https://instagram.com/honchideraodo?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer"><p>@honchideraodo</p></a></button>
            </div>
          </div>

          <div className="co__contact_content1">
            <div className="co__contact_content_img">
              <img src={Email} alt="Email" />
            </div>
           <div className="co__contact_content_text">
              <h1>Email</h1>
              <button><a href="https://mailto:chideraodo@gmail.com" target="_blank" rel="noreferrer"><p>chideraodo@gmail.com</p></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact