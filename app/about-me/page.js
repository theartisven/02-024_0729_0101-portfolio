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
import Protopie from "../../public/Protopie.svg";
import Axure from "../../public/Axure.svg";

export default function AboutMe() {
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800 min-h-[748px] max-h-[77.77%] p-4 gap-4 flex flex-col overflow-y-scroll ">
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				<div
					className="flex flex-col p-4 gap-7 bg-white dark:bg-neutral-900 rounded-xl w-[56rem] outline outline-1 outline-neutral-200 dark:outline-black" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							//Experiences
							<div className="grid gap-4 grid-cols-3  grid-auto-flow">
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold">
										UI / UX Designer
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										ADA Asia
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										2024.06 - Current
									</h4>
									<div className="absolute top-2 right-2 bg-green-500 outline-white outline-si w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
										<RiCheckFill />
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold">
										Creative Intern
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										ADA Asia
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										2021.10 - 2022.01
									</h4>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold">
										UI / UX intern
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Humble Sustainability
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										2020.07 - 2020.10
									</h4>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white dark:bg-neutral-900 rounded-xl w-[56rem] outline outline-1 outline-neutral-200 dark:outline-black" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							//Certificates
							<div className="grid gap-4 grid-cols-2  grid-auto-flow">
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Build Wireframes and Low-Fidelity Prototypes
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Coursera
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.12
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Start the UX Design Process: Empathize, Define, and Ideate
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Coursera
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.11
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Foundations of User Experience (UX) Design
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Coursera
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.10
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Completion in UX & Web Design Master Course
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Udemy
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2018.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<SiUdemy />
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Certificate of Participation "The Great Graphics Workshop by
										Jann Galinno" (1st place)
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										Jann Galinno
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2018.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<GrWorkshop />
									</div>
								</div>

								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Become a Data Analyst
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										LinkedIn
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Not Used
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Data Cleaning in Python Essential Training
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										LinkedIn
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Not Used
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										R Essential: Wrangling and Visualizing Data
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										LinkedIn
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Not Used
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Power BI Essential Training
									</h3>
									<h4 className="font-jet text-sm text-neutral-600 dark:text-white">
										LinkedIn
									</h4>
									<h4 className="font-jet text-xs text-neutral-500 dark:text-white">
										Issued 2022.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-neutral-500 text-sm dark:text-white">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Not Used
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white dark:bg-neutral-900 rounded-xl w-[56rem] outline outline-1 outline-neutral-200 dark:outline-black" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							//Languages
							<div className="grid gap-4 grid-cols-4  grid-auto-flow">
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										English
									</h3>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Filipino
									</h3>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										Hiligaynon
									</h3>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
										German
									</h3>

									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
										Learning
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white dark:bg-neutral-900 rounded-xl w-[56rem] outline outline-1 outline-neutral-200 dark:outline-black" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							//Softwares
							<div className="grid gap-4 grid-cols-3  grid-auto-flow">
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<FaFigma />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Figma
										</h3>
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<Protopie />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Protopie
										</h3>
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<FaWebflow />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Webflow
										</h3>
									</div>
								</div>

								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<TbBrandBlender />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Blender
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
										Learning
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<SiAdobexd />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Adobe XD
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Inactive
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<Axure />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Axure RP
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Inactive
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<SiAdobephotoshop />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Photoshop
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Inactive
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<SiAdobeaftereffects />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											After Effects
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs dark:bg-orange-400/75 dark:text-orange-300 dark:outline-orange-400">
										Inactive
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white dark:bg-neutral-900 rounded-xl w-[56rem] outline outline-1 outline-neutral-200 dark:outline-black" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-neutral-800 dark:text-white flex flex-col gap-4 w-full">
							// Things Im Learning
							<div className="grid gap-4 grid-cols-2  grid-auto-flow">
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<RiReactjsFill />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											React JS
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
										Learning
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<RiNextjsFill />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Next JS
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
										Learning
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<TbBrandFramerMotion />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Framer Motion
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs dark:bg-yellow-400/75 dark:text-yellow-100 dark:outline-yellow-400">
										Learning
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<HiCube />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											3D Modelling
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800  text-neutral-400 font-medium outline outline-1 outline-neutral-400 text-xs">
										Standby
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<FaPython />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Python
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800  text-neutral-400 font-medium outline outline-1 outline-neutral-400 text-xs">
										Standby
									</div>
								</div>
								<div className="bg-white dark:bg-neutral-900 p-4 rounded-lg outline outline-1 outline-neutral-200 dark:outline-black shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-neutral-500 dark:text-white">
											<SiDavinciresolve />
										</div>
										<h3 className="font-jet text-base text-neutral-800 dark:text-white font-bold text-balance dark:text-white">
											Da Vinci Resolve
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800  text-neutral-400 font-medium outline outline-1 outline-neutral-400 text-xs">
										Standby
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
