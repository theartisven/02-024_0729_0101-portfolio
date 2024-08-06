"use client";
import "../globals.css";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CardCase(props) {
	return props.status === "active" ? (
		<motion.div
			whileHover={{ scale: 1.025 }}
			transition={{
				type: "spring",
				stiffness: 600,
				damping: 20,
				duration: 0.5,
			}}
		>
			<Link
				href={props.href}
				className="cardcase w-full h-full bg-white flex flex-col justify-between content-between p-4 rounded-lg shadow-lg dark:bg-neutral-900 gap-1"
			>
				<div className="flex flex-row justify-between items-center w-full">
					<div
						className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}
					></div>
					<h3 className={`${props.colorFont} font-bold text-xs font-jet`}>
						{props.date}
					</h3>
					<div
						className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}
					></div>
				</div>

				<div className="h-[1px] bg-neutral-300 w-full dark:bg-neutral-200 "></div>
				<div className="flex flex-col gap-x-3">
					<h1 className="text-base text-neutral-800 font-medium font-jet dark:text-white md:text-xl">
						{props.title}
					</h1>
					<h2 className="text-xs text-neutral-400 font-jet text-ellipsis tracking-[170%] leading-6 overflow-hidden line-clamp-3 text-pretty dark:text-white xl:line-clamp-3">
						{props.description}
					</h2>
				</div>

				<div className="h-[1px] bg-neutral-300 w-full dark:bg-neutral-200"></div>
				<div className="flex flex-row justify-between items-center w-full text-neutral-400 dark:text-white">
					<div className="flex flex-row gap-2">
						{props.icon.map((icon, index) => (
							<span key={index}>{icon}</span>
						))}
					</div>
					<RiLinkM />
				</div>
			</Link>
		</motion.div>
	) : (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={cardVariants}
			transition={{ duration: 0.3 }}
			className="w-full h-full z-10 flex flex-col gap-4 justify-center items-center outline outline-1 rounded-lg text-neutral-400 bg-neutral-200 dark:text-black dark:bg-neutral-700"
		>
			<div className={`text-xl font-medium font-jet`}>{props.title}</div>
			<FaLock />
		</motion.div>
	);
}
