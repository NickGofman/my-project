import React from 'react';
import { FaAward, FaLightbulb, FaBrain } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="mt-8">
      <h5 className="text-center text-gray-600">Get To Know</h5>
      <h2 className="text-2xl text-center font-bold mb-4">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg p-3 mx-auto">
        <article className="bg-color-bg-variant border border-transparent rounded-lg p-10 text-center transition hover:bg-transparent hover:border-color-primary-variant">
          <div className="flex flex-col items-center justify-center h-full">
            <FaLightbulb className="text-color-primary text-2xl md:mb-4" />
            <h5 className="text-lg font-semibold">Innovation</h5>
            <small className="text-color-light">
              I bring creative ideas to the table and love to innovate in my
              work.
            </small>
          </div>
        </article>
        <article className="bg-color-bg-variant border border-transparent rounded-lg p-10 text-center transition hover:bg-transparent hover:border-color-primary-variant">
          <div className="flex flex-col items-center justify-center h-full">
            <FaBrain className="text-color-primary text-2xl md:mb-4" />
            <h5 className="text-lg font-semibold">Problem Solving</h5>
            <small className="text-color-light">
              I thrive in tackling challenges and finding effective solutions.
            </small>
          </div>
        </article>
        <article className="bg-color-bg-variant border border-transparent rounded-lg p-10 text-center transition hover:bg-transparent hover:border-color-primary-variant">
          <div className="flex flex-col items-center justify-center h-full">
            <FaAward className="text-color-primary text-2xl md:mb-4" />
            <h5 className="text-lg font-semibold">Leadership</h5>
            <small className="text-color-light">
              As a graduate, I've demonstrated leadership skills in various team
              projects.
            </small>
          </div>
        </article>
      </div>
      <div className="flex flex-col items-center mt-10 md:w-3/4 lg:w-1/2 mx-auto p-">
        <p className="mb-4 text-center">
          Hi there! I'm Nick, a dedicated and enthusiastic software engineer
          with a strong passion for creating innovative and impactful digital
          solutions. I'm well-versed in both frontend and backend technologies.
          I thrive in collaborative environments and love turning ideas into
          reality. Let's work together to bring your projects to life!
        </p>
        <a
          href="#contact"
          className="btn bg-color-primary hover:bg-color-white hover:text-color-bg text-color-bg hover:--color-white transition-colors duration-300 ease-in-out p-2 rounded-md"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
}

export default About;
