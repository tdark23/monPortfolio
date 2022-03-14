import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Skills.scss'

const Skills = () => {

  const skills = [
    {
      name: 'React',
      icon: images.react,
      bgColor: '#edf2f8',
    },
    {
      name: 'Figma',
      icon: images.figma,
      bgColor: '#edf2f8',
    },
    {
      name: 'Git',
      icon: images.git,
      bgColor: '#edf2f8',
    },
    {
      name: 'NodeJs',
      icon: images.node,
      bgColor: '#edf2f8',
    },
    {
      name: 'GraphQL',
      icon: images.graphql,
      bgColor: '#edf2f8',
    },
    {
      name: 'TypeScript',
      icon: images.typescript,
      bgColor: '#edf2f8',
    },
  ];

  


  const experiences = [
    {
      year: 2021,
      works: '',
      name: 'Frontend Developer',
      company: 'Tejiz Sarl',
      desc: 'Working as a Frontend developer',
    },
    {
      year: 2022,
      works: '',
      name: 'Software Engeneer',
      company: 'Hintekk LLC',
      desc: 'Working as a Software Engeneer',
    },
  ];

 

  return (
    <>
      <h2 className="head-text">My Skills & Experiences</h2>

      <div id="skills" className="app__skills-container">
      <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((exp) => (
            <motion.div
              className="app__skills-exp-item"
              key={exp.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={exp.name}
                      key={exp.name}
                    >
                      <h4 className="bold-text">{exp.name}</h4>
                      <p className="p-text">{exp.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={exp.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {exp.desc}
                    </ReactTooltip>
                  </>
                
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
