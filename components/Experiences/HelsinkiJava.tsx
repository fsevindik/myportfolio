import { motion } from "framer-motion";

type Props = {};

export default function HelsinkiJava({}: Props) {
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
          src="https://yt3.googleusercontent.com/ytc/AL5GRJUgcO3APMG5CvLcaKIIyM8sbwNFY3DAhRNCI6ET=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Helsinki University java Programming Course
        </h4>

        <div className="flex flex-row ">
          <p className="font-bold text-2xl m-2  ">Owned Certificate: Java-1</p>
          <a target="blank" href="https://java-programming.mooc.fi/">
            <img
              className="h-12- w-12  rounded-full m-2 "
              src="https://cdn-icons-png.flaticon.com/512/3291/3291669.png"
              alt=""
            />
          </a>
        </div>

        <div className="flex space-x-2 my-2"></div>
        <p className=" py-5 text-gray-300">
          During this course, I have leart the basics of computer programming,
          along with algorithms and object-oriented programming through the Java
          programming language. The course includes comprehensive materials and
          plenty of programming exercises - all of which are tested using our
          automatic testing service Test My Code. I am grateful for this course
          , and it has been a valuable part of my coding journey. I feel better
          equipped for the next leg of my journey, which includes diving into
          JavaScript and React coding.
        </p>
      </div>
    </article>
  );
}
