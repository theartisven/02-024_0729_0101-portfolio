import "../globals.css";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

export default function CardCase(props) {
	return props.status === "active" ? (
		<Link
			href={props.href}
			className="w-full h-full bg-white flex flex-col justify-between content-between p-4 rounded-lg shadow-lg"
		>
			<div className="flex flex-row justify-between items-center w-full">
				<div className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}></div>
				<h3 className={`${props.colorFont} font-bold text-xs font-jet `}>
					{props.date}
				</h3>
				<div className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}></div>
			</div>

			<div className="h-[1px] bg-gray-300 w-full"></div>
			<div className="flex flex-col gap-x-3">
				<h1 className="text-xl text-gray-800 font-medium font-jet">
					{props.title}
				</h1>
				<h2 className="text-xs text-gray-400 font-jet text-ellipsis tracking-[170%] leading-6 overflow-hidden line-clamp-3 text-pretty">
					{props.description}
				</h2>
			</div>

			<div className="h-[1px] bg-gray-300 w-full"></div>
			<div className="flex flex-row justify-between items-center w-full text-gray-400">
				<div className="flex flex-row gap-2">
					{props.icon.map((icon, index) => (
						<span key={index}>{icon}</span>
					))}
				</div>
				<RiLinkM />
			</div>
		</Link>
	) : (
		<div className="w-full h-full  z-10 flex  flex-col gap-4 justify-center items-center  outline outline-1  rounded-lg text-gray-400 bg-gray-200">
			<div className={`text-xl font-medium font-jet`}>{props.title}</div>
			<FaLock />
		</div>
	);
}
