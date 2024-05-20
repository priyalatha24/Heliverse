// Import React
// import React from 'react';
import magic from '../assets/magic.png'

 const Magic = () => {
  return (
    <div className="flex flex-wrap justify-around pt-9">
      {/* Repeat this block for each image */}
      <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center p-5">
        <div className='text-white w-full '>
          <h1 className='text-4xl  '>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
          <p className='pt-7 text-grey-600'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
          <button className="mt-14 bg-gradient-to-r from-orange-500 to-violet-500 text-transparent font-semibold text-white py-4 px-9 rounded-2xl flex items-center  ">
          Purchase From Envato
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
        </div>
        
        
      </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center p-5">
          
          <div className="p-5 ">
            <img src={magic} alt="star" />
            
          </div>
        </div>

        
    </div>
  
  );
};
export default Magic;