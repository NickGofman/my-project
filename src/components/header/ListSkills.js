import { Typography } from '@material-tailwind/react';

export function ListSkills() {
  return (
    <div className="skills">
      <ul className=" mb-4 mt-2 flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="paragraph"
          className="p-1 m-0 text-color-primary hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out  rounded-md border-color-primary border-solid border-2 "
        >
          Full - Stack
        </Typography>
        <Typography
          as="li"
          variant="paragraph"
          className="p-1 m-0 text-color-primary hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out  rounded-md border-color-primary border-solid border-2 "
        >
          DB - Management
        </Typography>
        <Typography
          as="li"
          variant="paragraph"
          className="p-1 m-0 text-color-primary hover:bg-color-white hover:text-color-bg  md:mr-4 transition-colors duration-300 ease-in-out  rounded-md border-color-primary border-solid border-2 "
        >
          OOP - Programming
        </Typography>
      </ul>
    </div>
  );
}
