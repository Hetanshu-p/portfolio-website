import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-[48%] sm:w-[45%] md:w-[30%] lg:w-[250px]" // 2 per row on mobile
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-4 sm:px-8 flex justify-evenly items-center flex-col min-h-[220px]">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
        <h3 className="text-white text-[16px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a final-year Computer Science co-op student at McMaster University with a strong foundation in software development and problem-solving. 
        I am skilled in Java, Python, C, and other modern technologies mentioned below. 
        I enjoy collaborating with others, tackling challenging problems, and building practical solutions. A quick learner and adaptable team player,
        I am always eager to explore new technologies and contribute meaningfully to projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
