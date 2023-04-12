import { motion } from "framer-motion";

type Props = {
  direcitonLeft?: boolean;
};

function CssSkill({ direcitonLeft }: Props) {
  return (
    <a target="blank" href="https://www.w3schools.com/">
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: direcitonLeft ? -20 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="data:image/png;base64,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"
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

export default CssSkill;
