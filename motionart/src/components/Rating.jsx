// Rating.jsx
// import React from 'react';
import Rimg1 from '../assets/Rimg1.png';
import Rimg2 from '../assets/Rimg2.png';
import Rimg3 from '../assets/Rimg3.png';
import star from '../assets/star.png';

const Rating = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {/* Repeat this block for each image */}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center p-5">
        <div>
          <img src={Rimg1} alt="1img" />
        </div>
        <div className="p-5">
          <img src={star} alt="star" />
          <h3 className="text-white">4.5 Score, 9 Reviews</h3>
        </div>
      </div>
      {/* End of repeat block */}
      
      {/* Other rating blocks... */}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center p-5">
          <div>
            <img src={Rimg2} alt="2img" />
          </div>
          <div className="p-5">
            <img src={star} alt="star" />
            <h3 className="text-white">4.5 Score, 9 Reviews</h3>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center p-5">
          <div>
            <img src={Rimg3} alt="1img" />
          </div>
          <div className="p-5">
            <img src={star} alt="star" />
            <h3 className="text-white">4.5 Score, 9 Reviews</h3>
          </div>
        </div>

        
    </div>
  );
};

export default Rating; 

