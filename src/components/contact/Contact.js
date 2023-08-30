import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import FormContact from '../form/Form';
import HeaderSocials from '../header/HeaderSocials';
import { Input, Textarea } from '@material-tailwind/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [err, setErr] = useState('');
  const form = useRef();

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmail()) {
      setErr('');
      sendEmail();
    } else {
      setErr('Your Email Format is not good');
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setInputs({ name: '', email: '', message: '' });
          setErr('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const checkEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputs.email);
  };

  return (
    <section className="text-center">
      <h2 className="text-2xl text-color-primary text-center font-bold mb-4">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  rounded-lg">
        {/* <div className="flex flex-col items-center text-center justify-around">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className=" mt-8">Hate forms? Send us an email instead.</div>
          </div>
          <div className="bg-color-bg-variant  p-8 rounded-xl flex flex-col items-center text-xl">
            <MdOutlineEmail className="text-4xl text-color-primary" />
            <h4>Email</h4>
            <h5>nikg1999@gmail.com</h5>
            <a
              className="text-color-primary-variant hover:text-color-primary mt-1"
              href="mailto:nikg1999@gmail.com"
            >
              send a message
            </a>
          </div>
        </div> */}

        <form ref={form} onSubmit={handleSubmit} className="flex flex-col ">
          <div className="flex flex-row w-full space-x-3">
            {/* <span className="uppercase text-sm  font-bold">Full Name</span> */}
            {/* <input type="text" name="name" placeholder="Full Name" required /> */}
            <Input
              value={inputs.name}
              onChange={handleInputs}
              label="Name"
              name="name"
              color="blue"
              className=" min-w-100px text-color-white"
            />
            <Input
              onChange={handleInputs}
              name="email"
              label="Email"
              color="blue"
              value={inputs.email}
              className=" min-w-100px text-color-white"
            />

            {/* <span className="uppercase text-sm  font-bold">Email</span>
            <input
              required
              className="w-full   mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleInputs}
            /> */}
          </div>
          <div className="mt-3">
            {/* <span className="uppercase text-sm  font-bold">Message</span> */}
            <Textarea
              value={inputs.message}
              label="Message"
              onChange={handleInputs}
              name="message"
              color="blue"
              className="  text-color-white border-solid "
            />
            {/* <textarea
              required
              value={inputs.message}
              placeholder="Message"
              name="message"
              className=" w-full h-32   mt-2 p-3 rounded-lg focus:outline-none "
              onChange={handleInputs}
            ></textarea> */}
          </div>
          <div className="mt-8 text-color-primary">
            <button className="btn text-color-primary hover:bg-color-white hover:text-color-bg transition-colors duration-300 border-2 rounded-lg w-full focus:outline-none">
              Send Message
            </button>
            <div className="text-color-error">{err && err}</div>
          </div>
        </form>
        <div className="flex flex-row justify-around mt-6 lg:justify-evenly items-center  ">
          <a
            href="https://www.linkedin.com/in/nick-gofman-israel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-5xl duration-300 hover:scale-105 text-center hover:text-color-primary " />
          </a>
          <a
            href="https://github.com/NickGofman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-5xl duration-300 hover:scale-105 hover:text-color-primary" />
          </a>
          <a href="mailto:nikg1999@gmail.com">
            <MdOutlineEmail className="text-5xl duration-300 hover:scale-105 hover:text-color-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
