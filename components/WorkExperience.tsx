import { motion } from "framer-motion";
import FreecodeCamp from "./Experiences/FreeCodeCamp";
import GitHub from "./Experiences/GitHub";
import { default as HelsinkiJava } from "./Experiences/HelsinkiJava";
import Patika from "./Experiences/Patika";
import Scrimba from "./Skills/Scrimba";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lift md:flex-row 
     max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80  "
      >
        <HelsinkiJava />
        <FreecodeCamp />
        <Patika />
        <Scrimba />
        <GitHub />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
