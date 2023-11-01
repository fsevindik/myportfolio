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
      "Reminder app that has Sign in , Log in and Autentication with email. It has a simple and smooth homepage just like Todoist. There is also page for personal infos like name and personal photo to upload . And of course you can add projects and remove them. I have used Chackra UI for styles.You may reach the original site by clicking on picture.",
    url: "https://todoist.com/auth/signup",
  },
  {
    title: "Authentication and Authorization",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/register.png",

    description:
      "Authentication is a crucial security concept that ensures only authorized users can access resources and perform actions within a system or application. To help users understand authentication terms, it is important to display them clearly and concisely",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Setting UserName and Uploading Photo",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/upload.png",
    description:
      "We provide an onboard page for users to personalize their experience by allowing them to upload a photo and choose a username. To pick a username, users can use a text field where they can enter their desired name. We also offer a file upload control that enables users to select an image file from their device to use as their profile picture. To ensure a smooth experience, we provide guidelines on acceptable image formats and sizes for photo uploads. By enabling users to upload a photo and choose a username, we aim to make our website/application more engaging and personal for them. ",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Adding Projects and Removing Them",
    image:
      "https://raw.githubusercontent.com/muratcan23/myportfolio/main/public/task.png",
    description:
      "Our platform allows users to manage their projects by adding or deleting them as needed. Users can add new projects by using a simple form that includes fields for project name, priority level, description, and color selection. The priority level helps users prioritize their projects, while the color selection enables them to categorize their projects by color for easy identification. Users can also delete projects they no longer need with just a few clicks. Our platform provides a seamless and efficient way for users to manage their projects and stay organized. ",
    url: "https://github.com/users/kod-man/projects/4",
  },
  {
    title: "Story Estimate Replica",
    image:
      "https://github.com/muratcan23/myportfolio/blob/main/public/storyestimate.png?raw=true",
    description:
      " 'Story Estimate' is a fundamental concept in agile project management. It involves a collaborative process where team members collectively assess and estimate the complexity or effort required to complete specific tasks or user stories within a project. This practice plays a vital role in efficient project planning and helps teams prioritize and allocate resources effectively",
    url: "https://www.storyestimate.com/",
  },

  {
    title: "Story Estimate Replica",
    image:
      "https://github.com/muratcan23/myportfolio/blob/main/public/estimatevotes.png?raw=true",
    description:
      "Inspired by the concept of 'Story Estimate' , the Story Estimate Replica project is a collaborative web application that mimics the process of taking votes from different team members to estimate task complexity. It calculates the average estimate while also providing a disagreement rate, enhancing agile project planning and consensus-building.",
    url: "https://github.com/muratcan23/estimateMe",
  },
  {
    title: "Story Estimate Replica",
    image:
      "https://github.com/muratcan23/myportfolio/blob/main/public/estimateresults.png?raw=true",
    description:
      " EstimateME includes vote calculation for task estimates, a disagreement rate metric for team consensus, vote tracking, and clear categorization of consensus levels as medium, high, or low. These features empower teams to collaborate effectively and make informed decisions during the estimation process",
    url: "https://github.com/muratcan23/estimateMe",
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
                alt=""
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
