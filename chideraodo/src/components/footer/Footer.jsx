import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="co__footer">
      <p> &copy; Chidera Odo 2023 </p> 
      <hr/>
      <p>Designed by Hoppi Tech</p>
      <div className="co__footer_button">
        <a href="#top"><button >^</button></a>
      </div>
    </div>
  )
}

export default Footer