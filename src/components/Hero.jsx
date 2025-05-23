import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.6,
      duration: 1,
    },
  }),
};

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#419449]'> El Khmaiti Aissame </span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Web Developer
            </motion.p>

            <motion.span
              className="font-thin text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              &nbsp;&nbsp;&amp;&nbsp;&nbsp;
            </motion.span>

            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Full Stack Developer
            </motion.p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  );
};

export default Hero;
