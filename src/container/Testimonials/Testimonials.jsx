import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Testimonials.scss'
import { images } from '../../constants';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testi = [
    {
      name: 'Paul',
      company: 'Meta',
      imgUrl: images.madara,
      FeedBack: 'Ted is just an awesome developer. From the start of the project, through to completion, He supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him',
    },
    {
      name: 'Joel',
      company: 'Google',
      imgUrl: images.gojo,
      FeedBack: "Ted was recommended to me by a mutual friend as a web developer. We discussed my requirements fully before going ahead with anything and he put together a package for me that met all my needs. I never felt pushed or pressured and the whole thing from start to finish was stress free and supportive. The website when completed completely surpassed all my expectations and I am totally thrilled. Any tweaks and edits that were needed were minimal and done quickly.",
    },
    {
      name: 'Cho',
      company: 'Amazo',
      imgUrl: images.bruce,
      FeedBack: "Ted is just an awesome developer,and he's a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.",
    },
    {
      name: 'Yann',
      company: 'Netflix',
      imgUrl: images.hashirama,
      FeedBack: "Great Job, would recommend ! Without doubt one of the most talented programmers out there.  I always go back to Ted when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.",
    },
  ]
  const [testimonials, setTestimonials] = useState(testi);

  const brand = [
    {
      name: 'Skype',
      imgUrl: images.skype,
      _id: '1',
    },
    {
      name: 'Spotify',
      imgUrl: images.spotify,
      _id: '2',
    },
    {
      name: 'New Balance',
      imgUrl: images.nb,
      _id: '3',
    },
    {
      name: 'Bolt',
      imgUrl: images.bolt,
      _id: '4',
    },
    {
      name: 'Asus',
      imgUrl: images.asus,
      _id: '5',
    },
    {
      name: 'Amazon',
      imgUrl: images.amazon,
      _id: '6',
    },
    {
      name: 'Adidas',
      imgUrl: images.adidas,
      _id: '7',
    },
  ]
  const [brands, setBrands] = useState(brand);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex]
  return (
    <>
      {testimonials.length && (
        <>
          <div id='testimonials' className="app__testimonial-item app__flex">
            <img src={test.imgUrl} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.FeedBack}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);