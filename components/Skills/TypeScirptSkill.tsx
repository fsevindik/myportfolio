import { motion } from "framer-motion";

type Props = {
  direcitonLeft?: boolean;
};

function TypeScirptSkill({ direcitonLeft }: Props) {
  return (
    <a target="blank" href="https://www.typescriptlang.org/">
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: direcitonLeft ? -20 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4XkG2FlYpT8Vq4uJOvB5rONiBZA1dq1MTA&usqp=CAU"
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

export default TypeScirptSkill;
