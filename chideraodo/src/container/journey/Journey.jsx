import React from 'react';
import './journey.css';
import Ebeano from '../../assets/ebeano.png'

const Journey = () => {
  return (
    <div className="co__journey">
      <div className="co__journey_body">
        <div className="co__journey_body_img">
          <img src={Ebeano} alt="ebeano" />
        </div>
        <div className="co__journey_body_content">
          <h1>Political Journey</h1>
          <p>Hon. Chidera Odo is a committed member of the ebeano Political Family. His commitment to the people of Enugu State is a defining characteristic of his political career, which led him to become the Chairman of ebeano Volunteer Movement. A group that led the Campaign to the success of the 2023 PDP Governorship Candidate. He has worked diligently to address pressing issues and leave a positive legacy while serving in a variety of positions.</p>
        </div>
      </div>
    </div>
  )
}

export default Journey