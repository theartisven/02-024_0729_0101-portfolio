/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
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

export default function AboutMe() {
	const sectionExperiences = [
		{
			title: "UI / UX Designer",
			company: "ADA Asia",
			date: "2024.06 - Current",
			isCurrent: true,
		},
		{
			title: "Creative Intern",
			company: "ADA Asia",
			date: "2021.10 - 2022.01",
		},
		{
			title: "UI / UX Intern",
			company: "Humble Sustainability",
			date: "2020.07 - 2020.10",
		},
	];

	const sectionCertificate = [
		{
			title: "Build Wireframes and Low-Fidelity Prototypes",
			issuer: "Coursera",
			date: "Issued 2022.12",
			icon: <IoLogoGoogle />,
		},
		{
			title: "Start the UX Design Process: Empathize, Define, and Ideate",
			issuer: "Coursera",
			date: "Issued 2022.11",
			icon: <IoLogoGoogle />,
		},
		{
			title: "Foundations of User Experience (UX) Design",
			issuer: "Coursera",
			date: "Issued 2022.10",
			icon: <IoLogoGoogle />,
		},
		{
			title: "Completion in UX & Web Design Master Course",
			issuer: "Udemy",
			date: "Issued 2018.08",
			icon: <SiUdemy />,
		},
		{
			title:
				'Certificate of Participation "The Great Graphics Workshop by Jann Galinno" (1st place)',
			issuer: "Jann Galinno",
			date: "Issued 2018.08",
			icon: <GrWorkshop />,
		},
		{
			title: "Become a Data Analyst",
			issuer: "LinkedIn",
			date: "Issued 2022.09",
			icon: <FaLinkedin />,
			notUsed: true,
		},
		{
			title: "Data Cleaning in Python Essential Training",
			issuer: "LinkedIn",
			date: "Issued 2022.09",
			icon: <FaLinkedin />,
			notUsed: true,
		},
		{
			title: "R Essential: Wrangling and Visualizing Data",
			issuer: "LinkedIn",
			date: "Issued 2022.09",
			icon: <FaLinkedin />,
			notUsed: true,
		},
		{
			title: "Power BI Essential Training",
			issuer: "LinkedIn",
			date: "Issued 2022.08",
			icon: <FaLinkedin />,
			notUsed: true,
		},
	];

	const sectionLanguage = [
		{ name: "English" },
		{ name: "Filipino" },
		{ name: "Hiligaynon" },
		{ name: "German", isLearning: true },
	];

	const sectionSoftware = [
		{ name: "Figma", icon: <FaFigma /> },
		{ name: "Protopie", icon: <Protopie /> },
		{ name: "Webflow", icon: <FaWebflow /> },
		{ name: "Blender", icon: <TbBrandBlender />, status: "Learning" },
		{ name: "Adobe XD", icon: <SiAdobexd />, status: "Inactive" },
		{ name: "Axure RP", icon: <Axure />, status: "Inactive" },
		{ name: "Photoshop", icon: <SiAdobephotoshop />, status: "Inactive" },
		{
			name: "After Effects",
			icon: <SiAdobeaftereffects />,
			status: "Inactive",
		},
	];

	const sectionLearning = [
		{ name: "React JS", icon: <RiReactjsFill />, status: "Learning" },
		{ name: "Next JS", icon: <RiNextjsFill />, status: "Learning" },
		{
			name: "Framer Motion",
			icon: <TbBrandFramerMotion />,
			status: "Learning",
		},
		{ name: "3D Modelling", icon: <HiCube />, status: "Standby" },
		{ name: "Python", icon: <FaPython />, status: "Standby" },
		{ name: "Da Vinci Resolve", icon: <SiDavinciresolve />, status: "Standby" },
	];
	return (
		<div className="content bg-neutral-100 w-full dark:bg-neutral-800 p-4 gap-4 flex flex-col  lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden overflow-y-scroll">
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							\\experiences
							<div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3  grid-auto-flow">
								{sectionExperiences.map((experience, index) => (
									<div
										key={index}
										className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative"
									>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold">
											{experience.title}
										</h3>
										<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
											{experience.company}
										</h4>
										<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
											{experience.date}
										</h4>
										{experience.isCurrent && (
											<div className="absolute top-2 right-2 bg-green-500 w-fit h-fit px-2 py-1 rounded-full flex items-center gap-2 text-white text-xs">
												<RiCheckFill />
											</div>
										)}
									</div>
								))}
							</div>
						</h1>
					</div>
				</div>
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							\\certificates
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 grid-auto-flow">
								{sectionCertificate.map((course, index) => (
									<div
										key={index}
										className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative"
									>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance">
											{course.title}
										</h3>
										<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
											{course.issuer}
										</h4>
										<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
											{course.date}
										</h4>
										<div className="absolute top-2 right-2 w-fit h-fit px-2 py-1 rounded-full flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
											{course.icon}
										</div>
										{course.notUsed && (
											<div className="absolute bottom-2 right-2 w-fit h-fit px-2 py-1 rounded-full text-xs  font-medium outline outline-1  flex flex-row gap-2 items-center bg-orange-100 text-orange-600 outline-orange-600 dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
												Not Used
											</div>
										)}
									</div>
								))}
							</div>
						</h1>
					</div>
				</div>
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							\\languages
							<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4  grid-auto-flow">
								{sectionLanguage.map((language, index) => (
									<div
										key={index}
										className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col md:flex-row gap-2 xlitems-center justify-between"
									>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance">
											{language.name}
										</h3>
										{language.isLearning && (
											<div className="w-fit h-fit px-2 py-1 rounded-full  bg-yellow-100 text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
												Learning
											</div>
										)}
									</div>
								))}
							</div>
						</h1>
					</div>
				</div>
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							\\softwares
							<div className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  grid-auto-flow">
								{sectionSoftware.map((tool, index) => (
									<div
										key={index}
										className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col md:flex-row gap-2 justify-between text-base"
									>
										<div className="flex flex-row gap-2 items-center ">
											<div className="text-neutral-500 dark:text-white">
												{tool.icon}
											</div>
											<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance">
												{tool.name}
											</h3>
										</div>
										{tool.status && (
											<div
												className={`w-fit h-fit px-2 py-1 rounded-full font-medium outline outline-1 text-xs ${
													tool.status === "Learning"
														? "bg-yellow-100 text-yellow-600 outline-yellow-600 dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400"
														: "bg-orange-100 text-orange-600 outline-orange-600 dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400"
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
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							\\things im learning
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2  grid-auto-flow">
								{sectionLearning.map((tool, index) => (
									<div
										key={index}
										className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col md:flex-row gap-2 justify-between text-base"
									>
										<div className="flex flex-row gap-2 items-center">
											<div className="text-neutral-500 dark:text-white">
												{tool.icon}
											</div>
											<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance">
												{tool.name}
											</h3>
										</div>
										<div
											className={`w-fit h-fit px-2 py-1 rounded-full font-medium outline outline-1 text-xs  ${
												tool.status === "Learning"
													? "bg-yellow-100 text-yellow-600 outline-yellow-600 dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400"
													: "bg-neutral-100 text-neutral-400 outline-neutral-400 dark:bg-neutral-700 dark:text-neutral-400 dark:outline-neutral-400"
											}`}
										>
											{tool.status}
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
