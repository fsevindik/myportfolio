import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-3 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-[rgba(36,36,36,0.8)] backdrop-blur-sm">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center mb-3 sm:mb-0"
      >
        <a 
          target="_blank" 
          href="https://github.com/fsevindik"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <SocialIcon 
            fgColor="transparent" 
            bgColor="gray"
            style={{ height: 35, width: 35 }}
          />
        </a>
      </motion.div>

      <div className="flex flex-col items-center sm:items-end space-y-2">
        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer group"
          >
            <SocialIcon
              className="cursor-pointer transform group-hover:scale-110 transition-transform duration-200"
              network="email"
              fgColor="gray"
              bgColor="transparent"
              style={{ height: 35, width: 35 }}
            />
            <p className="uppercase text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
              Get In Touch
            </p>
          </motion.div>
        </Link>

        <motion.a
          href="https://flowcv.com/resume/5nf5chplhr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="bg-[rgba(75,75,75,0.3)] text-gray-200 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs uppercase tracking-wider hover:bg-gray-600 hover:text-white transition-all duration-200 transform hover:scale-105 whitespace-nowrap min-w-[80px] text-center border border-gray-600 shadow-sm"
        >
          Download CV
        </motion.a>
      </div>
    </header>
  );
}