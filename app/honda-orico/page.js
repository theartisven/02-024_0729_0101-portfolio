/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoHourglassSharp } from "react-icons/io5";
import Link from "next/link";
import { cards } from "./data";

export default function CaseStudy5() {
	const images = [
		{
			src: "../img/case_studies/honda-orico/honda-orico_1.webp",
			alt: "honda-orico_1.webp",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_2.webp",
			alt: "honda-orico_2.webp",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_3.webp",
			alt: "honda-orico_3.webp",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_4.webp",
			alt: "honda-orico_4.webp",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_5.webp",
			alt: "honda-orico_5.webp",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_6.webp",
			alt: "honda-orico_6.webp",
		},
	];
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800  min-h-[748px] max-h-[77.77%] p-4 gap-4 flex flex-col overflow-y-scroll rounded-md overflow-hidden">
			<div className="flex flex-row justify-between">
				<Link
					href={"/"}
					className="outline-neutral-500 flex flex-row items-center gap-2 outline-xs dark:text-white"
				>
					<RiArrowLeftSLine />
					back
				</Link>
				<div className="font-jet outline-xl text-xl  dark:text-white">
					Honda Orico
				</div>
				<div className="bg-rose-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<IoHourglassSharp />
					STOP
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
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
