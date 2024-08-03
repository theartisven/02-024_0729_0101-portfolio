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
		<div className="content bg-neutral-100 min-h-[748px] max-h-[77.77%] p-4 gap-4 flex flex-col overflow-y-scroll ">
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				<div
					className="flex flex-col p-4 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-gray-800 flex flex-col gap-4 w-full">
							//Experiences
							<div className="grid gap-4 grid-cols-3  grid-auto-flow">
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold">
										UI / UX Designer
									</h3>
									<h4 className="font-jet text-sm text-gray-600">ADA Asia</h4>
									<h4 className="font-jet text-xs text-gray-500">
										2024.06 - Current
									</h4>
									<div className="absolute top-2 right-2 bg-green-500 outline-white outline-si w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
										<RiCheckFill />
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2">
									<h3 className="font-jet text-base text-gray-800 font-bold">
										Creative Intern
									</h3>
									<h4 className="font-jet text-sm text-gray-600">ADA Asia</h4>
									<h4 className="font-jet text-xs text-gray-500">
										2021.10 - 2022.01
									</h4>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2">
									<h3 className="font-jet text-base text-gray-800 font-bold">
										UI / UX intern
									</h3>
									<h4 className="font-jet text-sm text-gray-600">
										Humble Sustainability
									</h4>
									<h4 className="font-jet text-xs text-gray-500">
										2020.07 - 2020.10
									</h4>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-gray-800 flex flex-col gap-4 w-full">
							//Certificates
							<div className="grid gap-4 grid-cols-2  grid-auto-flow">
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Build Wireframes and Low-Fidelity Prototypes
									</h3>
									<h4 className="font-jet text-sm text-gray-600">Coursera</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.12
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Start the UX Design Process: Empathize, Define, and Ideate
									</h3>
									<h4 className="font-jet text-sm text-gray-600">Coursera</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.11
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Foundations of User Experience (UX) Design
									</h3>
									<h4 className="font-jet text-sm text-gray-600">Coursera</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.10
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<IoLogoGoogle />
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Completion in UX & Web Design Master Course
									</h3>
									<h4 className="font-jet text-sm text-gray-600">Udemy</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2018.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<SiUdemy />
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Certificate of Participation "The Great Graphics Workshop by
										Jann Galinno" (1st place)
									</h3>
									<h4 className="font-jet text-sm text-gray-600">
										Jann Galinno
									</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2018.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<GrWorkshop />
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Become a Data Analyst
									</h3>
									<h4 className="font-jet text-sm text-gray-600">LinkedIn</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center">
										Not Used
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Data Cleaning in Python Essential Training
									</h3>
									<h4 className="font-jet text-sm text-gray-600">LinkedIn</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center">
										Not Used
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										R Essential: Wrangling and Visualizing Data
									</h3>
									<h4 className="font-jet text-sm text-gray-600">LinkedIn</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.09
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center">
										Not Used
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-col gap-2 relative">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Power BI Essential Training
									</h3>
									<h4 className="font-jet text-sm text-gray-600">LinkedIn</h4>
									<h4 className="font-jet text-xs text-gray-500">
										Issued 2022.08
									</h4>
									<div className="absolute top-2 right-2 w-fit px-2 py-1 rounded-full outline-xs flex items-center gap-2 text-gray-500 text-sm">
										<FaLinkedin />
									</div>
									<div className="absolute bottom-2 right-2 w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 flex flex-row gap-2 items-center">
										Not Used
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-gray-800 flex flex-col gap-4 w-full">
							//Languages
							<div className="grid gap-4 grid-cols-4  grid-auto-flow">
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										English
									</h3>
									<div className=" bg-green-500 outline-white outline-si w-fit px-2 py-1 rounded-full outline-xs  text-white text-xs">
										<RiCheckFill />
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Filipino
									</h3>
									<div className=" bg-green-500 outline-white outline-si w-fit px-2 py-1 rounded-full outline-xs  text-white text-xs">
										<RiCheckFill />
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										Hiligaynon
									</h3>
									<div className=" bg-green-500 outline-white outline-si w-fit px-2 py-1 rounded-full outline-xs  text-white text-xs">
										<RiCheckFill />
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 items-center justify-between">
									<h3 className="font-jet text-base text-gray-800 font-bold text-balance">
										German
									</h3>

									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs">
										Learning
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-gray-800 flex flex-col gap-4 w-full">
							//Softwares
							<div className="grid gap-4 grid-cols-3  grid-auto-flow">
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<FaFigma />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Figma
										</h3>
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<Protopie />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Protopie
										</h3>
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<FaWebflow />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Webflow
										</h3>
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<TbBrandBlender />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Blender
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs">
										Learning
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<SiAdobexd />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Adobe XD
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs">
										Inactive
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<Axure />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Axure RP
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs">
										Inactive
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<SiAdobephotoshop />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Photoshop
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs">
										Inactive
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<SiAdobeaftereffects />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											After Effects
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-orange-100  text-orange-600 font-medium outline outline-1 outline-orange-600 text-xs">
										Inactive
									</div>
								</div>
							</div>
						</h1>
					</div>
				</div>
				<div
					className="flex flex-col p-4 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-2xl font-medium  text-gray-800 flex flex-col gap-4 w-full">
							// Things Im Learning
							<div className="grid gap-4 grid-cols-2  grid-auto-flow">
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<RiReactjsFill />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											React JS
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs">
										Learning
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<RiNextjsFill />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Next JS
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs">
										Learning
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<TbBrandFramerMotion />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Framer Motion
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-yellow-100  text-yellow-600 font-medium outline outline-1 outline-yellow-600 text-xs">
										Learning
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<HiCube />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											3D Modelling
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-gray-100  text-gray-400 font-medium outline outline-1 outline-gray-400 text-xs">
										Standby
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<FaPython />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Python
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-gray-100  text-gray-400 font-medium outline outline-1 outline-gray-400 text-xs">
										Standby
									</div>
								</div>
								<div className="bg-white p-4 rounded-lg outline outline-1 outline-gray-200 shadow-sm flex flex-row gap-2 justify-between text-base">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-gray-500">
											<SiDavinciresolve />
										</div>
										<h3 className="font-jet  text-gray-800 font-bold text-balance">
											Da Vinci Resolve
										</h3>
									</div>
									<div className="w-fit px-2 py-1 rounded-full text-sm bg-gray-100  text-gray-400 font-medium outline outline-1 outline-gray-400 text-xs">
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
