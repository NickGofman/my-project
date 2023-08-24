import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="flex flex-row space-x-14 mb-10 mt-10">
      <a
        href="https://www.linkedin.com/in/nick-gofman-israel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="lg:text-8xl text-6xl hover:text-color-primary " />
      </a>
      <a
        href="https://github.com/NickGofman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="lg:text-8xl text-6xl hover:text-color-primary" />
      </a>
    </div>
  );
}

export default HeaderSocials;
