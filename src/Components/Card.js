import React from 'react';

const Card = ({ image, heading, buttonLabel, description, link }) => {
  return (
      <div class="card card-width">
        <div class="card-sl">
            <div class="card-image">
              <img src={image} alt="Event" className="card-image" style={{ width: '100%', height: '200px' }}/>
              </div>
              <div class="card-heading">
                {heading}
              </div>
              <div class="card-text">
                  {description}
              </div>
              <a href={link} class="card-button"> {buttonLabel}</a>
            </div>
      </div>
  );
};


export default Card;
