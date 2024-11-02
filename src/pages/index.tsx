import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../../components/About";
import ContactME from "../../components/ContactME";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Hobby from "../../components/Hobby";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import WorkExperience from "../../components/WorkExperience";

const SECTION_DATA = [];

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>Fırat's Portfolio</title>
        {/* brother :))  eyes on here*/}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0WZMHCZ0CW"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WZMHCZ0CW');
          `}
        </script>
      </Head>

      <Header />

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="hobbies" className="snap-start">
        <Hobby />
      </section>

      <section id="contact" className="snap-end">
        <ContactME />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex item-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 
              cursor:pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgns0Op1KV7lanc7oc3StdI_Fgx3m5YAsVeA&usqp=CAU"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
