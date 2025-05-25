import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  disableTilt,
}) => {
  const CardContent = (
    <div className='bg-tertiary p-5 rounded-2xl w-full max-w-[360px] min-h-[400px] text-white z-20 relative'>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-30'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-white text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {disableTilt ? (
        CardContent
      ) : (
        <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='w-full'>
          {CardContent}
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-6 justify-center relative z-10'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            disableTilt={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
