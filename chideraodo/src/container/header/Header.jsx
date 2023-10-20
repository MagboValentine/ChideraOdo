import React from 'react'
import './header.css'
import Image1 from '../../assets/image1.png'

const Header = () => {
  return (
    <div className="Header_bg" id="top">
        <div className="co__header">
            <div className="co__header_img">
                <img src={Image1} alt="Chidera" />
            </div>
            <div className="co__header_content">
                <h1>Hon. Chidera Odo</h1>
                <hr />
                <p>
                    We are pleased to welcome you to Chidera Odo's official website, 
                    where you can find out more about how we are fighting for a better,
                    more prosperous Enugu State. Chidera Odo is committed to having a 
                    good effect on our beloved state with steadfast dedication and a 
                    clear vision.
                </p>
                <p>
                    We can build a future where there is development, harmony, and 
                    opportunity for everybody.
                    Learn more about the Chidera Odo's history, political career, and 
                    the urgent challenges we want to solve by exploring the website. 
                    We are excited for your participation and support because we really believe in the power of community.

                </p>
            </div>
        </div>
    </div>
  )
}

export default Header