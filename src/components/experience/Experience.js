import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section className="  items-center mt-8 ">
      <h5 className="text-center text-gray-600">What Skills I Have</h5>
      <h2 className="text-2xl text-color-primary text-center font-bold mb-4">
        My Experience
      </h2>
      <div className="grid  w-3/4 grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto ">
        <div className=" rounded-3xl bg-color-bg-variant bg-gray-100 p-6  shadow-md transition hover:bg-transparent hover:bg-blue-500 ">
          <h3 className="text-xl font-semibold mb-7 text-center text-primary text-color-primary ">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 gap-4 flex-grow justify-items-center">
            {/* Frontend development details */}
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">HTML</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">CSS</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">JavaScript</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">React</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">TailWind</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            {/* ... other frontend skills ... */}
          </div>
        </div>
        <div className="rounded-3xl  bg-color-bg-variant bg-gray-100 p-6  shadow-md transition hover:bg-transparent hover:bg-blue-500 ">
          <h3 className="text-xl font-semibold mb-7 text-center text-primary text-color-primary">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-4  flex-grow justify-items-center">
            {/* Backend development details */}
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">Node JS</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">MongoDB</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">MySQL</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">Python</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">Java</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
            <article className="flex items-center gap-2">
              <BsPatchCheckFill className="text-blue-500  text-color-primary" />
              <div>
                <h4 className="font-semibold">Postman</h4>
                <small className="text-gray-500">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
