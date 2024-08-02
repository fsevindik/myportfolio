import { motion } from "framer-motion";

type Props = {};

type Project = {
  title: string;
  image: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Todoist Clone",
    image:
      "https://res.cloudinary.com/imagist/image/fetch/f_auto/q_auto/c_scale,w_2240/https://todoist.com/static/home/hero/illustration_w_2026.png?_a=ATCqVcY0",
    description:
      "Reminder app that has Sign in, Log in, and Authentication with email. It has a simple and smooth homepage just like Todoist. There is also a page for personal info like name and photo upload. You can add and remove projects. I used Chakra UI for styles. You may reach the original site by clicking on the picture.",
    url: "https://todoist.com/auth/signup",
  },
  {
    title: "Authentication and Authorization",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/register.png?raw=true",
    description:
      "Authentication ensures only authorized users can access resources within a system or application. This page helps users understand authentication terms clearly and concisely.",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Setting UserName and Uploading Photo",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/upload.png?raw=true",
    description:
      "This page allows users to personalize their experience by uploading a photo and choosing a username. It includes guidelines for image formats and sizes to ensure a smooth experience.",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Adding Projects and Removing Them",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/task.png?raw=true",
    description:
      "Users can manage their projects by adding or removing them as needed. It includes fields for project details like name, priority, description, and color selection for easy identification.",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Story Estimate Replica",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/storyestimate.png?raw=true",
    description:
      "'Story Estimate' is a collaborative process where team members assess the complexity of tasks. This project helps in agile project management by enabling effective planning and resource allocation.",
    url: "https://www.storyestimate.com/",
  },
  {
    title: "Story Estimate Replica",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/estimatevotes.png?raw=true",
    description:
      "This project mimics the process of taking votes from team members to estimate task complexity. It calculates the average estimate and provides a disagreement rate for better project planning.",
    url: "https://github.com/muratcan23/estimateMe",
  },
  {
    title: "Story Estimate Replica",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/estimateresults.png?raw=true",
    description:
      "EstimateME includes features for vote calculation, disagreement rate metrics, and clear categorization of consensus levels. It helps teams collaborate effectively during the estimation process.",
    url: "https://github.com/muratcan23/estimateMe",
  },
  {
    title: "Personal film/blog page",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/filmologregister.png?raw=true",
    description:
      "This project is a personal endeavor where I have applied much of what I have learned and developed using my own skills. It serves as a modern blog page for me, showcasing my development work and involvement in all aspects of design and development.",
    url: "https://filmolog.onrender.com/",
  },
  {
    title: "Personal film/blog page",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/filmologhome.png?raw=true",
    description:
      "I've utilized many of the skills and knowledge I've acquired to build this project. It reflects my personal touch and showcases my hands-on experience in every aspect of its design and development.",
    url: "https://filmolog.onrender.com/",
  },
  {
    title: "Personal film/blog page",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/filmologuser.png?raw=true",
    description:
      "You can explore the films I have selected. Feel free to visit, critique, and leave comments or notes for me (the admin). Still expanding and upgrading. ",
    url: "https://filmolog.onrender.com/",
  },
];

function Projects({}: Props) {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly max-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 
        scrollbar-thumb-[#F7AB0A]/80 h-4/5"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen "
          >
            <a target="_blank" href={project.url}>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl mb-auto">
              <h4 className="text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study :{" "}
                </span>
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
