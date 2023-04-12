import { motion } from "framer-motion";
import ChackraUiSkill from "./Skills/ChackraUiSkill";
import CssSkill from "./Skills/CssSkill";
import GitHbubSkill from "./Skills/GitHbubSkill";
import HtmlSkill from "./Skills/HtmlSkill";
import JavaScirptSkill from "./Skills/JavaScirptSkill";
import NodeSkill from "./Skills/NodeSkill";
import ReactSkill from "./Skills/ReactSkill";
import TailwindSkill from "./Skills/TailwindSkill";
import TypeScirptSkill from "./Skills/TypeScirptSkill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row
  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      {/* <h3 className="aboslute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency profieciency
      </h3> */}

      <div className="grid grid-cols-3 gap-6">
        <ReactSkill />
        <HtmlSkill />
        <JavaScirptSkill />
        <CssSkill />
        <TypeScirptSkill />
        <NodeSkill />
        <GitHbubSkill />
        <TailwindSkill />
        <ChackraUiSkill />
      </div>
    </motion.div>
  );
}

export default Skills;
