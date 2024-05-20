// import React from 'react'
import chromeicon from '../assets/chromeicon.png'

const Chrome = () => {
  return (
    <div className="flex flex-wrap p-10 justify-center">
      <div className="w-full text-white bg-[#080c23]">
        <div className=" border border-gray-700 bg-transparent bg-gray-800 rounded-3xl p-10 text-center">
          <h1 className='font-semibold text-3xl'>Supported by All Popular Browsers</h1>
          <p className='p-5'>Rest assured, Motion Art is designed to be compatible <br /> with all major web browsers.</p>
          <img className='mx-auto block' src={chromeicon} alt="section" /> {/* Add mx-auto and block */}
        </div>
      </div>
    </div>
  )
};

export default Chrome;
