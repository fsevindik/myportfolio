import { motion } from "framer-motion";

type Props = {};

export default function Scrimba({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <a target="blank" href="https://scrimba.com/learn/learnreact">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
          src="https://scrimba.com/static/art/scrimba-og-image.png"
          alt=""
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Scrimba: The Interactive Learning Platform That Lets You Code Along
          with Video Lessons
        </h4>

        <div className="flex space-x-2 my-2"></div>
        <p className=" py-5 text-gray-300">
          If you're looking to improve your React skills, Scrimba offers a range
          of high-quality video lessons that cover different aspects of the
          popular JavaScript library. Their React courses are taught by amazing
          teachers in the industry, including Bob Ziroll, a seasoned developer
          with a passion for teaching. With Scrimba's interactive code-learning
          experience and engaging video lessons, you can learn React at your own
          pace and build practical skills that you can apply in real-world
          projects.
        </p>
      </div>
    </article>
  );
}
