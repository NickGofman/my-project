import React, { useEffect, useState } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import nickolai_spitochom from '../../assets/Nick-removebg-preview.png';
import { Typography } from '@material-tailwind/react';
// import { ListSkills } from './ListSkills';

function Header() {
  const [socialsVisible, setSocialsVisible] = useState(false); // State to manage socials visibility

  // Use useEffect to set socialsVisible to true after a delay
  useEffect(() => {
    setTimeout(() => {
      setSocialsVisible(true);
    }, 500); // Adjust the delay as needed
  }, []);
  return (
    <header className="flex mt-8 mb-8 w-1/2 ml-10 mr-10 flex-col  ">
      <div className=" mt-8 ">
        <div className="flex space-y-8 lg:space-y-0 md:space-y-0 flex-col md:flex-row  md:space-x-8 lg:flex-row  lg:space-x-8 items-center text-center justify-center">
          <div
            className={`transition-transform ${
              socialsVisible ? 'translate-x-0' : '-translate-x-full opacity-0'
            } duration-1000 transform `}
          ></div>
          <img
            src={nickolai_spitochom}
            alt="me"
            className={`transition-transform ${
              socialsVisible ? 'translate-x-0' : '-translate-x-full opacity-0'
            } hover:scale-105 duration-1000 transform w-64 rounded-full shadow-lg mx-auto`}
            style={{
              background: 'linear-gradient(var(--color-primary), transparent)',
              borderRadius: '12rem 12rem  12rem  12rem ',
              // width: '50%',
              padding: '1rem',
            }}
          />
          <div
            className={`transition-transform ${
              socialsVisible
                ? 'translate-x--100 '
                : 'translate-x-full opacity-0'
            } duration-1000 transform flex flex-col `}
          >
            <h1 className="text-3xl font-bold">Nick Gofman</h1>
            <Typography className="" variant="paragraph">
              Greetings! I'm an avid software engineer with a genuine passion
              for crafting innovative and impactful digital solutions.
            </Typography>

            <div className="mt-5">
              <h3 className="text-lg text-color-primary">Education</h3>

              <a href="https://www.pet.ac.il/" target="blank">
                <h6 className="text-color-light hover:text-color-white">
                  The National School for Practical Engineers at the Technion
                </h6>
              </a>
              <h5 className="text-color-light hover:text-color-white">
                Practical Software Engineer
              </h5>

              <CTA />
            </div>
          </div>
        </div>
        <div
          className={`transition-transform ${
            socialsVisible ? 'translate-x-0' : '-translate-x-full opacity-0'
          } duration-1000 transform `}
        >
          <HeaderSocials />
        </div>
        {/* <HeaderSocials /> */}
      </div>
    </header>
  );
}

export default Header;
