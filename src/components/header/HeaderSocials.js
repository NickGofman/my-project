import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="flex flex-row space-x-14 mb-10 mt-10 justify-center">
      <a
        href="https://www.linkedin.com/in/nick-gofman-israel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="text-8xl duration-300 hover:scale-105 hover:text-color-primary " />
      </a>
      <a
        href="https://github.com/NickGofman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="text-8xl duration-300 hover:scale-105 hover:text-color-primary" />
      </a>
    </div>
  );
}

export default HeaderSocials;
