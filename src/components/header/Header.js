import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import nickolai_spitochom from '../../assets/Nick-removebg-preview.png';

function Header() {
  return (
    <header className="flex  mt-8 mb-8 flex-col items-center">
      <h1 className="text-3xl font-bold">Nick Gofman</h1>
      <h5 className="text-color-light">FullStack Developer</h5>
      <CTA />
      <div className=" mt-8 ">
        <div className="flex flex-col items-center">
          <img
            src={nickolai_spitochom}
            alt="me"
            className="w-64 rounded-full shadow-lg mx-auto"
            style={{
              background: 'linear-gradient(var(--color-primary), transparent)',
              borderRadius: '12rem 12rem 0 0',
              width: '50%',
              padding: '1rem',
            }}
          />
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
}

export default Header;
