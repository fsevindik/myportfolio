import { motion } from "framer-motion";

type Props = {};

function Hobby({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly max-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20] text-gray-500 text-2xl ">
        Hobbies
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80  "
      >
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen "
        >
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
            src="https://logowik.com/content/uploads/images/t_arduino-black1493.logowik.com.webp"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full boject-cover
        md:rounded-lg md:w-64 md:h-95  "
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center ">
              Here some of my hobbies leaded me to software.
            </h4>
            <p className="text-lg text-center md:text-left">
              Hobby is an important aspect of my life. I love creating things
              with my hands and experimenting with different materials and
              techniques.My passion for hobbies like Arduino, handcraft, and
              FreeCAD has led me to the world of software. I was fascinated by
              the{" "}
              <span className="underline decoration-[#F7AB0A]/50 ">
                endless
              </span>{" "}
              possibilities of creating something.
            </p>
          </div>
        </div>

        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen "
        >
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
            src="https://i.imgur.com/YVaJ4jp.png"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full boject-cover
        md:rounded-lg md:w-64 md:h-95  "
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center ">
              Triggering my creativity enhancing my modeling and design skills
              with FreeCAD
            </h4>
            <p className="text-lg text-center md:text-left"></p>
          </div>
        </div>

        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen "
        >
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
            src="https://logowik.com/content/uploads/images/t_arduino-black1493.logowik.com.webp"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full boject-cover 
        md:rounded-lg md:w-64 md:h-95  "
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center ">
              Arduino Programming: How My Hobby Led Me to Discover the World of
              Software
            </h4>
            <p className="text-lg text-center md:text-left ">
              Hobby is an important aspect of my life. I love creating things
              with my hands and experimenting with different materials and
              techniques.My passion for hobbies like Arduino, handcraft, and
              FreeCAD has led me to the world of software. I was fascinated by
              the{" "}
              <span className="underline decoration-[#F7AB0A]/50 ">
                endless
              </span>{" "}
              possibilities of creating something.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Hobby;
