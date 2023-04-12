import { motion } from "framer-motion";

type Props = {};

export default function FreecodeCamp({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <a target="blank" href="https://www.freecodecamp.org/learn">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0"
          alt=""
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light ">freecodecamp</h4>
        <p className="font-bold text-2xl m-2  ">
          ------JavaScript Algorithms and Data Structures and Responsive Web
          Design Courses{" "}
        </p>
        <div className="flex space-x-2 my-2"></div>
        <p className=" py-5 text-gray-300">
          Freecodecamp offers a wide range of free online courses that cover
          various topics in web development and programming. Their courses are
          designed to be beginner-friendly, but they also offer more advanced
          courses for experienced developers who want to level up their
          skills.Thx to freecodecamp ...
        </p>
      </div>
    </article>
  );
}
