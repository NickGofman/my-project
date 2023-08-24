import React from 'react';

function CTA() {
  return (
    <div className="flex items-center mt-8 cta">
      <a
        href=""
        download
        className="btn text-color-primary hover:bg-color-white hover:text-color-bg  mr-4 transition-colors duration-300 ease-in-out p-4 rounded-md border-2"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="btn bg-color-primary hover:bg-color-white hover:text-color-bg text-color-bg hover:--color-white transition-colors duration-300 ease-in-out p-4 rounded-md"
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
