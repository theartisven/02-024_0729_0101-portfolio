/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
	title: "Case Study for Kansai Electric FTS",
};

export default function CaseStudy4() {
	const images = [
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_1.webp",
			alt: "final version of kansai site.",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_2.webp",
			alt: "close up version.",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_3.webp",
			alt: "close up version.",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_timelapse.webm",
			alt: "timelapse",
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
						Kansai Electric FTS
					</div>
					<div className="bg-green-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs sm:flex sm:items-center gap-2 text-white text-xs hidden">
						<RiCheckFill />
						DONE
					</div>
				</div>
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}

				<CardPhoto images={images} />
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none lg:w-[47rem]  ">
					<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white">
						\\links
					</h1>

					<div className="flex flex-col gap-4">
						<a
							href="https://www.kefts.com.sg/"
							className="text-blue-400 underline italic"
						>
							Website
						</a>

					</div>
				</div>
			</div>
		</div>
	);
}
