import React  from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './About.scss'

const About = () => {

  const abouts = [
    {
      title: 'Frontend Development',
      description: 'I can build beatiful and functional websites',
      imgUrl: images.about01,
    },
    {
      title: 'Backend Develoment',
      description: "Software structure",
      imgUrl: images.about02,
    },
    {
      title: 'UI/UX',
      description: "I can create creative and fancy UI/UX design",
      imgUrl: images.about03,
    },
    {
      title: 'MERN Stack',
      description: "I can manage both  client and server side of your app",
      imgUrl: images.about04,
    },
  ]


  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');