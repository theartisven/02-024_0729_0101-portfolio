/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoHourglassSharp } from "react-icons/io5";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
	title: "Case Study for Honda Orico",
};

export default function CaseStudy5() {
	const images = [
		{
			src: "../img/case_studies/honda-orico/honda-orico_01.webp",
			alt: "overall view for the project.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_02.webp",
			alt: "all mobile wireframe for the client . This is the latest version.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_03.webp",
			alt: "design mockup for the client side. I only adjust things for 1 and 2.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_04.webp",
			alt: "desktop version for the client side.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_05.webp",
			alt: "all mobile wireframe for the dealer. This is the version have not discussed yet.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_06.webp",
			alt: "design propose for dealer.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_07.webp",
			alt: "simplified version for client user flow.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_08.webp",
			alt: "simplified version for dealer user flow.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_09.webp",
			alt: "detailed version for client.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_10.webp",
			alt: "detailed version for dealer.",
		},
		{
			src: "../img/case_studies/honda-orico/honda-orico_11.webp",
			alt: "detailed version for admin.",
		},
	];

	return (
		<div className="content bg-neutral-100 w-full dark:bg-neutral-800 p-4 gap-4 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden overflow-y-scroll">
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
						Honda Orico
					</div>
					<div className="bg-rose-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
						<IoHourglassSharp />
						STOP
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
