import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
 
  return (
    <footer className=" py-4 text-center">
     

      <p>&copy; {new Date().getFullYear()} Nick Gofman. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
