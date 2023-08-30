import Skill from '../skill/Skill';
import { v4 as uuidv4 } from 'uuid';

export function ListSkills() {
  const skillsFrontEnd = [
    {
      title: 'JavaScript',
      description:
        'Proficient in dynamic web app development using modern ES6+ features.',
    },
    {
      title: 'Tailwind',
      description:
        'Skilled in creating responsive and visually appealing UIs with Tailwind CSS.',
    },
    {
      title: 'React',
      description:
        'Experienced in building seamless user interfaces and UI components with React.',
    },
    {
      title: 'React Query',
      description:
        'Proficient in custom queries using React Query for efficient data management.',
    },
    {
      title: 'React Routes',
      description:
        'Adept at creating structured navigation using React Router for smooth user journeys.',
    },
  ];

  const skillsBackEnd = [
    {
      title: 'Node.js',
      description:
        'Skilled in scalable back-end development using Node.js and event-driven architecture.',
    },
    {
      title: 'Express',
      description:
        'Experienced in building robust APIs with Express and efficient request handling.',
    },
    {
      title: 'MySQL',
      description:
        'Proficient in managing relational databases, designing schemas, and optimized querying.',
    },
    {
      title: 'Routes',
      description:
        'Well-versed in designing organized API endpoints for back-end functionalities.',
    },
    {
      title: 'Jsonwebtoken',
      description:
        'Knowledgeable in implementing secure authentication with JSON Web Tokens (JWT).',
    },
  ];

  return (
    <div className="flex mt-8 mb-8 w-2/3 ml-10 mr-10 flex-col text-start">
      <div className=" mb-4 mt-2  grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2  gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <div>
          <h2 className="text-center">Front-End</h2>
          {skillsFrontEnd.map((skill, key) => {
            return (
              <Skill
                key={uuidv4()}
                title={skill.title}
                description={skill.description}
              />
            );
          })}
        </div>
        <div className="">
          <h2 className="text-center">Back-End</h2>

          {skillsBackEnd.map((skill, key) => {
            return (
              <Skill
                key={uuidv4()}
                title={skill.title}
                description={skill.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
