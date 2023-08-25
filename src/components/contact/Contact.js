import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [err, setErr] = useState('');

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkEmail(inputs)) {
      await sendMail();
    }
  };

  const sendMail = async () => {
    if (inputs.email === '' || inputs.name === '' || inputs.message === '') {
      setErr('You Must Fill All the fields');
      console.log('if');
    } else {
      try {
        const response = await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            to_name: inputs.email,
            from_name: inputs.name,
            message: inputs.message,
            reply_to: inputs.email,
          },
          process.env.REACT_APP_EMAILJS_USER_ID // Replace with your user ID
        );
        setInputs({ name: '', email: '', message: '' });
        setErr('');
        console.log('Email sent successfully:', response);
      } catch (error) {
        setErr('Error sending email'); // Set an error message for sending email failure

        console.error('Error sending email:', error);
      }
    }
  };

  const checkEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  console.log('err', inputs);
  return (
    <>
      <div id="contact" className="text-center w-full">
        <h1 className="text-4xl lg:text-6xl">Contact Form</h1>
      </div>
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto bg-gray-100 text-gray-900 rounded-lg">
        <div className="flex flex-col items-center text-center justify-around">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
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
        <div className="border-2 border-rose-500 ">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="border-2 border-rose-500 border-spacing-3 w-full mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              name="name"
              placeholder="Full Name"
              value={inputs.name}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              required
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleInputs}
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              required
              placeholder="Message"
              name="message"
              className=" w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none "
              onChange={handleInputs}
            ></textarea>
          </div>{' '}
          <div className="mt-8 text-color-primary">
            <button
              className="btn text-color-primary hover:bg-color-white hover:text-color-bg transition-colors duration-300 border-2 rounded-lg w-full focus:outline-none"
              onClick={handleSubmit}
            >
              Send Message
            </button>

            {err && err}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
