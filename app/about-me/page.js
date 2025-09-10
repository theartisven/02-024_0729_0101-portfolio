import { RiCheckFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";
import { FaLinkedin, FaFigma, FaPython } from "react-icons/fa";
import { FaWebflow, FaImage } from "react-icons/fa6";
import {
  SiUdemy,
  SiAdobexd,
  SiDavinciresolve,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import { GrWorkshop } from "react-icons/gr";
import { TbBrandBlender, TbBrandFramerMotion } from "react-icons/tb";
import { HiCube } from "react-icons/hi2";
import Protopie from "../../public/svg/Protopie.svg";
import Axure from "../../public/svg/Axure.svg";

export const runtime = "edge";

export const metadata = {
  title: "Sven Hero Kaufmann's About Me",
};

export default function AboutMe() {
  const sectionExperiences = [
    {
      title: "UI \\ UX Designer",
      company: "ADA Asia",
      date: "2022.06 - current",
      isCurrent: true,
    },
    {
      title: "Creative Intern",
      company: "ADA Asia",
      date: "2021.10 - 2022.01",
    },
    {
      title: "UI \\ UX Intern",
      company: "Humble Sustainability",
      date: "2020.07 - 2020.10",
    },
  ];

  const sectionCertificate = [
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      issuer: "Coursera",
      date: "2022.12",
      icon: <IoLogoGoogle />,
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Coursera",
      date: "2022.11",
      icon: <IoLogoGoogle />,
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Coursera",
      date: "2022.10",
      icon: <IoLogoGoogle />,
    },
    {
      title: "Completion in UX & Web Design Master Course",
      issuer: "Udemy",
      date: "2018.08",
      icon: <SiUdemy />,
    },
    {
      title:
        'Certificate of Participation "The Great Graphics Workshop by Jann Galinno" (1st place)',
      issuer: "Jann Galinno",
      date: "2018.08",
      icon: <GrWorkshop />,
    },
    {
      title: "Become a Data Analyst",
      issuer: "LinkedIn",
      date: "2022.09",
      icon: <FaLinkedin />,
    },
    {
      title: "Data Cleaning in Python Essential Training",
      issuer: "LinkedIn",
      date: "2022.09",
      icon: <FaLinkedin />,
    },
    {
      title: "R Essential: Wrangling and Visualizing Data",
      issuer: "LinkedIn",
      date: "2022.09",
      icon: <FaLinkedin />,
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn",
      date: "2022.08",
      icon: <FaLinkedin />,
    },
  ];

  const sectionLanguage = [
    { name: "English" },
    { name: "Filipino" },
    { name: "Hiligaynon" },
    { name: "German" },
  ];

  const sectionSoftware = [
    { name: "Figma", icon: <FaFigma /> },
    { name: "Protopie", icon: <Protopie /> },
    { name: "Webflow", icon: <FaWebflow /> },
    { name: "Blender", icon: <TbBrandBlender /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Axure RP", icon: <Axure /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    {
      name: "After Effects",
      icon: <SiAdobeaftereffects />,
    },
  ];

  const sectionLearning = [
    { name: "React JS", icon: <RiReactjsFill /> },
    { name: "Next JS", icon: <RiNextjsFill /> },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
    },
    { name: "3D Modelling", icon: <HiCube /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Da Vinci Resolve", icon: <SiDavinciresolve /> },
  ];
  return (
    <div
      className="relative content flex flex-wrap justify-center gap-4 p-4 w-full max-w-full overflow-x-hidden overflow-y-scroll rounded 
    h-[86vh]
    md:h-[86vh]
    lg:h-[86vh]
    lg:max-w-[1000px] 
    xl:max-w-[1440px] 
    2xl:h-[840px]"
    >
      <div className="flex flex-col gap-[3rem] items-center justify-center h-100vh ">
        <div className="flex flex-col gap-2 rounded-xl w-[90vw] lg:w-[47rem]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jet text-l font-medium  text-zinc-800 dark:text-zinc-50 flex flex-col gap-2 w-full">
              \\experiences
              <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3  grid-auto-flow">
                {sectionExperiences.map((experience, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col gap-2 relative"
                  >
                    <h3 className="font-jet text-base text-zinc-800 dark:text-zinc-50 font-medium">
                      {experience.title}
                    </h3>
                    <h4 className="font-jet text-sm text-zinc-500 dark:text-zinc-400">
                      {experience.company}
                    </h4>
                    <h4 className="font-jet text-xs text-zinc-500 dark:text-zinc-500">
                      {experience.date}
                    </h4>
                    {experience.isCurrent && (
                      <div className="absolute bottom-2 right-2 lg:bottom-2 bg-green-500 w-fit h-fit px-2 py-1 rounded-full flex items-center gap-2 text-zinc-50 text-xs">
                        <RiCheckFill />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl w-[90vw] lg:w-[47rem]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jet text-l font-medium  text-zinc-800 dark:text-zinc-50 flex flex-col gap-2 w-full">
              \\certificates
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 grid-auto-flow">
                {sectionCertificate.map((course, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col gap-2 relative"
                  >
                    <h3 className="font-jet text-base text-zinc-800 dark:text-zinc-50 font-medium text-balance">
                      {course.title}
                    </h3>
                    <h4 className="font-jet text-sm text-zinc-500 dark:text-zinc-400">
                      {course.issuer}
                    </h4>
                    <h4 className="font-jet text-xs text-zinc-500 dark:text-zinc-500">
                      {course.date}
                    </h4>
                    <div className="absolute top-2 right-2 w-fit h-fit px-2 py-1 rounded-full flex items-center gap-2 text-zinc-400 text-sm dark:text-zinc-50">
                      {course.icon}
                    </div>
                    {course.notUsed && (
                      <div className="absolute bottom-2 right-2 w-fit h-fit px-2 py-1 rounded-full text-xs  font-medium outline outline-1  flex flex-row gap-2 items-center bg-orange-100 text-orange-500 outline-orange-500 dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl w-[90vw] lg:w-[47rem]  ">
          <div className="flex flex-row justify-between">
            <h1 className="font-jet text-l font-medium  text-zinc-800 dark:text-zinc-50 flex flex-col gap-2 w-full">
              \\languages
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4  grid-auto-flow">
                {sectionLanguage.map((language, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-2 xlitems-center justify-between"
                  >
                    <h3 className="font-jet text-base text-zinc-800 dark:text-zinc-50 font-medium text-balance">
                      {language.name}
                    </h3>
                    {language.isLearning && (
                      <div className="w-fit h-fit px-2 py-1 rounded-full  bg-yellow-100 text-yellow-500 font-medium outline outline-1 outline-yellow-500 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl w-[90vw] lg:w-[47rem] ">
          <div className="flex flex-row justify-between">
            <h1 className="font-jet text-l font-medium  text-zinc-800 dark:text-zinc-50 flex flex-col gap-2 w-full">
              \\softwares
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  grid-auto-flow">
                {sectionSoftware.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-2 justify-between text-base"
                  >
                    <div className="flex flex-row gap-2 items-center ">
                      <div className="text-zinc-500 dark:text-zinc-50">
                        {tool.icon}
                      </div>
                      <h3 className="font-jet text-base text-zinc-800 dark:text-zinc-50 font-medium text-balance">
                        {tool.name}
                      </h3>
                    </div>
                    {tool.status && (
                      <div
                        className={`w-fit h-fit px-2 py-1 rounded-full font-medium outline outline-1 text-xs ${
                          tool.status === "Learning"
                            ? "bg-yellow-100 text-yellow-500 outline-yellow-500 dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400"
                            : "bg-orange-100 text-orange-500 outline-orange-500 dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400"
                        }`}
                      >
                        {tool.status}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl w-[90vw] lg:w-[47rem]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jet text-l font-medium  text-zinc-800 dark:text-zinc-50 flex flex-col gap-2 w-full">
              \\things im learning
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2  grid-auto-flow">
                {sectionLearning.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-2 justify-between text-base"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <div className="text-zinc-500 dark:text-zinc-50">
                        {tool.icon}
                      </div>
                      <h3 className="font-jet text-base text-zinc-800 dark:text-zinc-50 font-medium text-balance">
                        {tool.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
