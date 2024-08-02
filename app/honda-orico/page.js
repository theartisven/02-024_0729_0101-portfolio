/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../../components/cardIndex";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoHourglassSharp } from "react-icons/io5";
import Link from "next/link";
import { cards } from "./data";

export default function CaseBMP() {
	return (
		<div className="content bg-neutral-100 min-h-[748px] max-h-[77.77%] p-4 gap-4 flex flex-col overflow-y-scroll ">
			<div className="flex flex-row justify-between">
				<Link
					href={"/"}
					className="outline-gray-500 flex flex-row items-center gap-2 outline-xs"
				>
					<RiArrowLeftSLine />
					back
				</Link>
				<div className="font-jet outline-xl text-xl ">Honda Orico</div>
				<div className="bg-rose-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<IoHourglassSharp />
					STANDBY
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}
				<div
					className="flex flex-col p-14 gap-7 bg-white rounded-xl min-w-4xl min-w-[56rem] outline outline-1 outline-gray-300" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-3xl font-medium  text-gray-800">
							//photos
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
