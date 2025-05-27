import React from "react";
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";
import My3DPic from "../components/canvas/My3DPic";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import { logo, menu, close, github } from "../assets";
import insta from "../assets/insta.png";
import { DownloadOutlined } from "@ant-design/icons";


const resumeDownloadLink = "https://drive.google.com/file/d/1zhZAyH1DADmtjs68H5sb7iHodyCt0483/view?usp=drive_link";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full sm:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='bg-tertiary rounded-[20px] p-[1px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-8 min-h-[260px] flex flex-col justify-center items-center'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain mb-4'
        />
        <h3 className='text-white text-[18px] font-bold text-center'>
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
        <h2 className={styles.sectionHeadText}>About me:</h2>
      </motion.div>

      {/* Main Flex Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 mt-8 max-w-7xl mx-auto px-4">
        
        {/* Text Section */}
        <div className="flex-1 w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[16px] leading-[28px] text-justify"
          >
            I'm Aissame Elkhmaiti, a passionate full-stack developer based in Casablanca, Morocco. I bring a strong commitment to every project, combining technical expertise with creativity to build modern, efficient, and user-friendly web applications.

            My skill set includes HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, PHP, MySQL, MongoDB, and tools like Git, Figma, and Canva. I’m also familiar with Agile and Scrum methodologies and constantly strive to grow by learning and applying the latest technologies.

            With a background in information systems and digital transformation, I’m well-prepared to contribute to innovative environments and collaborate on impactful solutions.
            <br /><br />
            Let’s work together to turn your ideas into reality!
          </motion.p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <a href="https://www.linkedin.com/in/aissame-elkhmaiti/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" className='w-9 h-9' />
            </a>
            <a href="https://github.com/aissameelkhmaiti" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" className='w-9 h-9' />
            </a>
            <a href="https://www.instagram.com/aissame_elkhmaiti/" target="_blank" rel="noreferrer">
              <img src={insta} alt="Instagram" className='w-9 h-9' />
            </a>
          </div>

          {/* Resume Download */}
         <a
  className='mt-6 inline-flex items-center rounded-2xl border bg-tertiary px-6 py-2 text-white hover:bg-green-600 transition-all'
  href={resumeDownloadLink}
  download='CV_Aissame_El_Khmaiti.pdf'
  rel='noreferrer'
>
  <DownloadOutlined className="mr-2 text-lg" />
  <span className='rounded-xl'>Resume</span>
</a>

        </div>

        {/* 3D Image Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className="flex-1 w-full max-w-md sm:max-w-sm"
        >
          <My3DPic />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
