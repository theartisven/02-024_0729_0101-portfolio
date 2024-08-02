/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../../components/cardIndex";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
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
				<div className="font-jet outline-xl text-xl ">Portfolio</div>
				<div className="bg-orange-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<FaBrain />
					ONGOING
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}
			</div>
		</div>
	);
}
