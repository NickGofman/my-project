import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import CarouselTransition from './CarouselTransition';
function Portfolio() {

  return (
    <section className="container mx-auto py-8 px-4 m-5 flex flex-col items-center">
      <h2 className='text-color-primary text-2xl mb-3'>Portfolio</h2>
<CarouselTransition/>

      {/* <Carousel
        className="bg-color-bg-variant rounded-xl w-1/3 "
        showThumbs={false}
        autoPlay={true}
        interval={8000}
        transitionTime={1000}
        infiniteLoop={true}
      >
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={imgHomeAdmin}
            alt="Admin Home Page"
            className="w-full mb-4"
          />
          <p>Admin Home Page Description.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={imgAssign} alt="Assign Musician" className="w-full mb-4" />
          <p>Assign Musician To Event Description.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={imgReports}
            alt="Admin Reports Page"
            className="w-full mb-4"
          />
          <p>Admin Reports Page Description.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={imgAllEvents} alt="All Events" className="w-full mb-4" />
          <p>All Events Description.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={imgCreateEvent}
            alt="Create Event"
            className="w-full mb-4"
          />
          <p>Create Event Description.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={imgUserHome} alt="User Home Page" className="w-full mb-4" />
          <p>User Home Page Description.</p>
        </div>
      </Carousel> */}

      {/* DARK MODE */}
      {/* <div className="max-w-xl mx-auto">
        <Carousel
          className=" rounded-xl object-contain"
          showThumbs={false}
          autoPlay={true}
          interval={8000}
          transitionTime={1000}
          infiniteLoop={true}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgHomeAdminDM}
              alt="Admin Home Page (Dark Mode)"
              className="w-full mb-4"
            />
            <p>Admin Home Page Description.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgAssignDM}
              alt="Assign Musician (Dark Mode)"
              className="w-full mb-4"
            />
            <p>Assign Musician To Event Description.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgReportsDM}
              alt="Admin Reports Page (Dark Mode)"
              className="w-full mb-4"
            />
            <p>Admin Reports Page Description.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgAllEventsDM}
              alt="All Events (Dark Mode)"
              className="w-full mb-4"
            />
            <p>All Events Description.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgCreateEventDM}
              alt="Create Event (Dark Mode)"
              className="w-full mb-4"
            />
            <p>Create Event Description.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={imgUserHomeDM}
              alt="User Home Page (Dark Mode)"
              className="w-full mb-4"
            />
            <p>User Home Page Description.</p>
          </div>
        </Carousel>
      </div> */}
    </section>
  );
}
export default Portfolio;
