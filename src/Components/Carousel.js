import React, { useState , useEffect } from 'react';
import image2 from '../assets/Images/Image1.jpg';
import image1 from '../assets/Images/Image2.jpg';
import image3 from '../assets/Images/Image3.jpg';

const Carousel = ({ size, auto }) => {
    const images = [image1, image2, image3];
    const [currentImage, setCurrentImage] = useState(0);
  
    const handleNext = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      let intervalId = null;
  
      if (auto) {
        intervalId = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [auto, currentImage, images.length]);
  
    const carouselStyle = {
      maxWidth: size,
      margin: '0 auto',
      width: '50%',
      height: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    return (
      <div className="carousel" style={carouselStyle}>
        <button onClick={handlePrev}>Previous</button>
        <img src={images[currentImage]} alt="carousel-img" style={{ width: '100%', height: 'auto', padding : '20px' }} />
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  
  export default Carousel;