import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
// import {BsWhatapp} from 'react-icons';
function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    if (checkEmail(inputs)) {
      sendMail(inputs);
    }
  };
  const sendMail = (inputs) => {};
  const checkEmail = (checkText) => {};

  return (
    // <section grid id="contact">
    //   <h5>Get In Touch</h5>
    //   <h2>Contact Me</h2>

    //   <div className="grid grid-col-1 gap-2 justify-center">
    //     <article className="bg-color-bg-variant padding 1.2 rounded-lg text-center border-color-bg-variant">
    //       <MdOutlineEmail />
    //       <h4>Email</h4>
    //       <h5>nikg1999@gmail.com</h5>
    //       <a href="mailto:nikg1999@gmail.com" target="blank">
    //         send a message
    //       </a>
    //     </article>
    //     <form className="bg-color-bg-variant flex flex-col pag 2 ">
    //       <input
    //         type="text"
    //         name="name"
    //         value={inputs.name}
    //         placeholder="Your Full Name"
    //         required
    //         onChange={handleInputs}
    //         className="w-full p-2 rounded-lg bg-color-bg-variant border-color-primary-variant"
    //       />
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Your Email"
    //         required
    //         onChange={handleInputs}
    //         value={inputs.email}
    //         className="w-full p-2 rounded-lg bg-color-bg-variant border-color-primary-variant"
    //       />

    //       <textarea
    //         name="message"
    //         id=""
    //         rows="7"
    //         placeholder="Send Message"
    //         onChange={handleInputs}
    //         value={inputs.message}
    //         className="w-full p-2 rounded-lg bg-color-bg-variant border-color-primary-variant"
    //       ></textarea>
    //       <button
    //         onSubmit={handleSubmit}
    //         className="btn bg-color-primary hover:bg-color-white hover:text-color-bg text-color-bg hover:--color-white transition-colors duration-300 ease-in-out p-4 rounded-md"
    //       >
    //         Send Message
    //       </button>
    //     </form>

    //     {/* <article>
    //         <BsWhatapp />
    //         <h4>Email</h4>
    //         <h5>nikg1999@gmail.com</h5>
    //         <a href="mailto:nikg1999@gmail.com">send a message</a>
    //       </article> */}
    //   </div>
    // </section>
    <>
      <div id="contact" class="text-center w-full ">
        <h1 class="text-4xl lg:text-6xl">Contact Form</h1>
      </div>
      <div class=" max-w-screen-xl  px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  mx-auto bg-gray-100 text-gray-900 rounded-lg ">
        <div class="flex flex-col items-center text-center justify-around">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div class="text-gray-700 mt-8">
              Hate forms? Send us an email instead.
            </div>
          </div>
          <div className="bg-color-bg-variant text-color-light   text-gray-600 p-8 rounded-xl flex flex-col items-center text-xl">
            <MdOutlineEmail className="text-4xl text-color-primary" />
            <h4>Email</h4>
            <h5>nikg1999@gmail.com</h5>
            <button
              className="text-color-primary-variant hover:text-color-primary mt-1"
              href="mailto:nikg1999@gmail.com"
            >
              send a message
            </button>
          </div>
        </div>
        <div class="border-2 border-rose-500 ">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="border-2 border-rose-500 border-spacing-3  w-full  mt-2 p-3 rounded-lg focus:outline-none "
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none "
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              placeholder="Message"
              className=" w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none "
            ></textarea>
          </div>
          <div class="mt-8">
            <button class="btn text-color-primary hover:bg-color-white hover:text-color-bg  transition-colors duration-300   border-2 rounded-lg w-full focus:outline-none ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
