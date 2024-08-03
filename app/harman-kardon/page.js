/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
import { cards } from "./data";

export default function CaseBMP() {
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800  min-h-[748px] max-h-[77.77%] p-4 gap-4 flex flex-col overflow-y-scroll ">
			<div className="flex flex-row justify-between">
				<Link
					href={"/"}
					className="outline-neutral-500 flex flex-row items-center gap-2 outline-xs dark:text-white"
				>
					<RiArrowLeftSLine />
					back
				</Link>
				<div className="font-jet outline-xl text-xl  dark:text-white">
					Harman Kardon
				</div>
				<div className="bg-yellow-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<IoIosDocument />
					PROPOSED
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}
				<div
					className="flex flex-col p-14 gap-7 bg-white rounded-xl min-w-4xl min-w-[56rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none" // Ensure
				>
					<div className="flex flex-row justify-between">
						<h1 className="font-jet text-3xl font-medium  text-neutral-800 dark:text-white">
							//photos
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
