import "../app/globals.css";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";

export default function CardCase(props) {
	return (
		<Link
			href={props.href}
			className="w-full h-full bg-white flex flex-col  justify-between content-between p-4 rounded-lg"
		>
			<div className="flex flex-row justify-between items-center w-full">
				<div className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}></div>

				<div className={`font-jet ${props.colorFont} font-bold text-xs`}>
					{props.date}
				</div>
				<div className={`h-[4px] w-[24px] rounded-full ${props.colorBG}`}></div>
			</div>

			<div className="h-[1px] bg-gray-300 w-full"></div>
			<div className=" flex flex-col gap-x-3">
				<div className="text-xl text-gray-800 font-medium font-jet">
					{props.title}
				</div>
				<div className="text-xs text-gray-400 font-jet turnacate tracking-[170%] leading-6 overflow-hidden line-clamp-4 text-pretty">
					{props.description}
				</div>
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
	);
}
