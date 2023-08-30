import { Typography } from '@material-tailwind/react';
import React from 'react';

function Skill(props) {
  console.log(props);
  return (
    <div className="p-2 m-1 hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out  rounded-md h-32 border-solid border-2 ">
      <Typography
        variant="paragraph"
        className="p-1 m-0 border-color-primary-variant text-color-primary text-center border-b-2 border-solid "
      >
        {props.title}
      </Typography>
      <Typography className='text-center mt-3' variant="small">{props.description}</Typography>
    </div>
  );
}

export default Skill;
