import { motion } from "framer-motion";

type Props = {};

export default function Parika({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <a target="blank" href="https://github.com/fsevindik">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHi3bU20lbqJ65nMcueGp6NTtUBF7YmQ5ecFAjsDPe3CANYcxDpomsAz4QJXcvR9ztAM&usqp=CAU"
          alt=""
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          GitHub: is the Facebook of All Coders..
        </h4>

        <div className="flex space-x-2 my-2"></div>
        <p className=" py-5 text-gray-300">
          Knowing how to use GitHub is essential for software developers. It's a
          social platform that allows coders to store, manage, and collaborate
          on their code, making it an essential tool for developing software.
          With its tools like version control and code review, it helps
          developers work efficiently and effectively. Being able to use GitHub
          is a valuable skill for any software developer, and it's essential to
          know how to use it to contribute to open source projects and
          collaborate with other developers.
        </p>
      </div>
    </article>
  );
}
