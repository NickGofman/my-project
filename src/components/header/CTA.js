import React, { useEffect, useState } from 'react';
import cvFile from '../../assets/NickGofman_Resume_.pdf'; // Import the path to your CV file

function CTA() {
   const [socialsVisible, setSocialsVisible] = useState(false); // State to manage socials visibility

   // Use useEffect to set socialsVisible to true after a delay
   useEffect(() => {

     setTimeout(() => {
       setSocialsVisible(true);
     }, 500); // Adjust the delay as needed
   }, []);
  return (
    <div
      className={`transition-transform ${
        socialsVisible ? 'translate-x--100 ' : 'translate-x-full opacity-0'
      } duration-1000 transform `}
    >
      <div className="  flex items-center justify-center  mt-8 md:flex-row flex-col md:space-y-0 space-y-2  ">
        <a
          href={cvFile}
          download="NickGofman_Resume.pdf"
          className="btn  m-0  text-color-primary hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out p-4 rounded-md border-2 hover:scale-105"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="btn  m-0 bg-color-primary hover:bg-color-white hover:text-color-bg text-color-bg hover:--color-white transition-colors duration-300 ease-in-out p-4 rounded-md hover:scale-105"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}

export default CTA;
