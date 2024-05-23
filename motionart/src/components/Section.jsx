// import React from 'react'
import section from '../assets/section.png'
import pagesection from '../assets/pagesection.png'

const Section = () => {
  return (
    <div className="text-white ">
        <h1 className='text-center text-4xl mt-10 p-10 font-semibold'>Apply On Any Section Or Enable For Whole Page</h1>
        
        <div className="flex flex-wrap p-10 justify-center ">
            <div className="xl:w-1/2 lg:w-1/2 w-full bg-[#080c23]">
                <div className="border border-gray-700 bg-transparent bg-gray-800 rounded-3xl p-10 ">
                    <h1 className='font-bold'>Apply On Section</h1>
                    <p className='p-5'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img src={section} alt="section" />
                </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 w-full lg:pl-5 pt-7 ">
                <div className=" bg-[#080c23] border border-gray-700 bg-transparent bg-gray-800 rounded-3xl p-10">
                    <h1 className='font-bold'>Apply On Page</h1>
                    <p className='p-5'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img src={pagesection} alt="pagesection" />
                 </div>
            </div>
        </div>
    </div>
  )
};
export  default Section;
