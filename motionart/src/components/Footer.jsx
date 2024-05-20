// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-violet-500 text-transparent text-white p-4">
    <div className="container ">
      <div className="p-5 flex flex-col md:flex-row justify-between"> {/* Center aligning the content */}
        <p className="text-center md:text-left">© 2024 Your Website. All Rights Reserved.</p> {/* Center the text on small screens, align left on medium and larger screens */}
        <div className="flex flex-col md:flex-row"> {/* Align the content to the right on medium and larger screens */}
          <h2 className="text-center md:text-left md:mr-5">Documentation</h2> 
          <h2 className="text-center pr-5 md:pr-0">Support</h2> {/* Move the "Support" heading to the right on small screens */}
        </div>
      </div>
    </div>
  </footer>
  
  
  
  )
};
export default Footer;
