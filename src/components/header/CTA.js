import React from 'react';
import cvFile from '../../assets/NickGofman_Resume_.pdf'; // Import the path to your CV file

function CTA() {
  return (
    <div className="flex items-center justify-center  mt-8 md:flex-row flex-col md:space-y-0 space-y-2  ">
      <a
        href={cvFile}
        download="NickGofman_Resume.pdf"
        className="btn  m-0  text-color-primary hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out p-4 rounded-md border-2"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="btn  m-0 bg-color-primary hover:bg-color-white hover:text-color-bg text-color-bg hover:--color-white transition-colors duration-300 ease-in-out p-4 rounded-md"
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
