import React from "react";
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";
import My3DPic from "../components/canvas/My3DPic";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import linkedin from "../assets/linkedin.svg"
import x from "../assets/x.svg"
import { logo, menu, close, github } from "../assets";
import insta from "../assets/insta.png";

const resumeDownloadLink =
  "https://drive.google.com/file/d/1zhZAyH1DADmtjs68H5sb7iHodyCt0483/view?usp=drive_link";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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

      <div className="flex flex-col md:flex-row items-start gap-10 mt-8 max-w-7xl mx-auto px-4">
        
        {/* LEFT: Text + Links */}
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
             I'm Aissame Elkhmaiti, a passionate full-stack developer based in Casablanca, Morocco. I bring a strong commitment to every project, combining technical expertise with creativity to build modern, efficient, and user-friendly web applications.

          My skill set includes HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, PHP, MySQL, MongoDB, and tools like Git, Figma, and Canva. I’m also familiar with Agile and Scrum methodologies and constantly strive to grow by learning and applying the latest technologies.

          With a background in information systems and digital transformation, I’m well-prepared to contribute to innovative environments and collaborate on impactful solutions.
            <br /><br />
            Let’s work together to turn your ideas into reality!
          </motion.p>

      

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a href="https://www.linkedin.com/in/aissame-elkhmaiti/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" className='w-9 h-9' />
            </a>
            <a href="https://github.com/aissameelkhmaiti" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" className='w-9 h-9' />
            </a>
            <a href="https://www.instagram.com/aissame_elkhmaiti/" target="_blank" rel="noreferrer">
              <img src={insta} alt="X" className='w-9 h-9' />
            </a>

            
          </div>
              {/* Resume Button */}
          <a
            className='mt-6 inline-flex items-center rounded-lg border bg-secondary p-2 px-6 text-black hover:bg-green-600 transition-all'
            href={resumeDownloadLink}
            download='CV_Aissame_El_Khmaiti.pdf'
            rel='noreferrer'
          >
            <span className='mr-2'>Resume</span>
            <img
              className='h-5 w-5'
              src='https://img.icons8.com/material-outlined/48/000000/link--v1.png'
              alt='link icon'
            />
          </a>
        </div>

        {/* RIGHT: 3D Image */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className="flex-1 max-w-md w-full"
        >
          <My3DPic />
        </motion.div>
      </div>

      {/* Services section below */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
    



export default SectionWrapper(About, "about");
