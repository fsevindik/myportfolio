import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full boject-cover
        md:rounded-lg md:w-64 md:h-95  "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little </span>
          background
        </h4>
        <p>
          Hi, I'm Fırat, also known as Murat Can. I've been learning software
          development for over two years now, and as a junior front-end
          developer, I'm constantly working on improving my skills. Currently,
          I'm focusing on React and using TypeScript to take my JavaScript
          abilities to the next level. I recently completed a to-do project with
          my mentor, which was an excellent learning experience.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
