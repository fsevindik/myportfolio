import { motion } from "framer-motion";

type Props = {};

export default function Parika({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <a
        target="blank"
        href="https://certificates.mooc.fi/validate/8g64ynz9nzw"
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
          src="https://global-uploads.webflow.com/6097e0eca1e87557da031fef/63739a32259566fc9428cb1d_Deneme.png"
          alt=""
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Patika.dev: Your Free Online Learning Platform for Programming
        </h4>

        <div className="flex space-x-2 my-2"></div>
        <p className=" py-5 text-gray-300">
          Patika.dev is an online learning platform that provides free courses
          on various programming topics. Thanks to their courses on JavaScript,
          HTML, CSS, GitHub, and VSCode, I was able to learn the basics of these
          technologies and develop a solid foundation for my programming
          journey. Their courses are well-structured and engaging, making it
          easy to follow along and apply what I learned in real-world projects.
        </p>
      </div>
    </article>
  );
}
