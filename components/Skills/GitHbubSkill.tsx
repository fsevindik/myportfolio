import { motion } from "framer-motion";

type Props = {
  direcitonLeft?: boolean;
};

function GitHbubSkill({ direcitonLeft }: Props) {
  return (
    <a target="blank" href="https://github.com/">
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: direcitonLeft ? -20 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://fs.buttercms.com/resize=width:940/I351RMgSjC6YAj1Ra8pE"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duraiton-300 ease-in-out "
        />
        <div
          className="absolute opacity-0 group-hover:opacity-10 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
        rounded-full z-0"
        >
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    </a>
  );
}

export default GitHbubSkill;
