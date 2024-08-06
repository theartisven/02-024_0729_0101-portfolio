/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
import { cards } from "./data";

export default function CaseStudy7() {
	const images = [
		{
			src: "../img/case_studies/harman-kardon/harman-kardon_1.webp",
			alt: "harman-kardon_1.webp",
		},
		{
			src: "../img/case_studies/harman-kardon/harman-kardon_2.webp",
			alt: "harman-kardon_2.webp",
		},
	];
	
	return (
		<div className="content bg-neutral-100 w-full dark:bg-neutral-800 p-4 gap-4 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center">

			<div className="flex flex-col gap-4 items-center justify-center h-100vh lg:w-[1000px] min-w-[1200px] ">
							<div className="flex md:flex-row md:justify-between items-center gap-4 w-[90vw] lg:w-[54rem] flex-col">
				<Link
					href={"/"}
					className="outline-neutral-500 flex flex-row items-center gap-2 outline-xs dark:text-white"
				>
					<RiArrowLeftSLine />
					back
				</Link>
				<div className="font-jet outline-xl text-xl  dark:text-white text-center">
					Harman Kardon
				</div>
				<div className="bg-yellow-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<IoIosDocument />
					PROPOSED
				</div>
			</div>
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}

				<CardPhoto images={images} />


			</div>
		</div>
	);
	
}
