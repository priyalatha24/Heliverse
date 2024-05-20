import dia1 from '../assets/dia1.png'
import dia2 from '../assets/dia2.png'
import dia3 from '../assets/dia3.png'

const Lastpg = () => {
  return (
    <div>
     <div className="text-center text-white pt-10 md:pt-20 pb-16 md:pb-28 px-6 md:px-0">
        <h1 className="p-4 md:p-8 text-2xl md:text-4xl font-semibold">An All-Round Plugin With <br /> Powerful Features</h1>
        <p className='mx-auto lg:w-1/2 text-sm md:text-base lg:text-lg text-gray-500'>Whether youre a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
      </div>

   
    <div className="flex flex-wrap justify-center">
  <div className="w-full  md:w-1/3 lg:w-1/4 ">
    <div className=" bg-[#080c23] p-5 m-5 rounded-2xl border border-gray-700 shadow-lg">
      <img src={dia1} alt="" />
      <h2 className='text-2xl font-semibold text-white'>Light Weight</h2>
      <p className='text-gray-500 mt-3'>Motion Art for Elementor is designed to be lightweight.</p>
    </div>
  </div>
  <div className="w-full  md:w-1/3 lg:w-1/4">
    <div className="bg-[#080c23] p-5 m-5 rounded-2xl border border-gray-700 shadow-lg">
      <img src={dia2} alt="" />
      <h2 className='text-2xl font-semibold text-white'>100% Responsive</h2>
      <p className='text-gray-500 mt-3'>Create a consistent visual experience across all devices.</p>
    </div>
  </div>
  <div className="w-full  md:w-1/3 lg:w-1/4">
    <div className="bg-[#080c23] p-5 m-5 rounded-2xl border border-gray-700 shadow-lg">
      <img src={dia3} alt="" />
      <h2 className='text-2xl font-semibold text-white'>User Friendly Interface</h2>
      <p className='text-gray-500 mt-3'>Ensure a smooth experience for both applicants and administrators.</p>
    </div>
  </div>
</div>

 

    </div>
    
  );
};

export default Lastpg;
