"use client";
import "../globals.css";
import Link from "next/link";

export default function CardExplore(props) {
	return props.status === "active" ? (
		<div>
			<Link
				href={props.href}
				className="cardcase w-full h-full  bg-white flex flex-col justify-between content-between p-4 rounded-lg shadow-lg dark:bg-neutral-900 gap-2 2xl:gap-4"
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
				</div>

				<div className="h-[1px] bg-neutral-300 w-full dark:bg-neutral-200"></div>
				<div className="flex flex-row justify-between items-center w-full text-neutral-400 dark:text-white">
					<div className="flex flex-row gap-2">
						{props.icon.map((icon, index) => (
							<span key={index}>{icon}</span>
						))}
					</div>
				</div>
			</Link>
		</div>
	) : (
		<div>
			<div
				href={props.href}
				className=" cardcase w-full h-full text-base text-neutral-800  dark:text-white font-medium font-jet md:text-xl bg-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg dark:bg-neutral-900 gap-2 2xl:gap-4"
			>
				<div className={``}>{props.title}</div>
				<FaLock />
			</div>
		</div>
	);
}
