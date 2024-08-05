/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export default function CaseStudy4() {
	const images = [
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_1.webp",
			alt: "kansai-electric-fts_1.webp",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_2.webp",
			alt: "kansai-electric-fts_2.webp",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_3.webp",
			alt: "kansai-electric-fts_3.webp",
		},
		{
			src: "../img/case_studies/kansai-electric-fts/kansai-electric-fts_timelapse.webm",
			alt: "kansai-electric-fts_timelapse.webm",
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
					Kansai Electric FTS
				</div>
				<div className="bg-green-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-white text-xs">
					<RiCheckFill />
					DONE
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center h-100vh ">
				{cards.map((card, index) => {
					return (
						<CardIndex key={index} {...card} length={cards.length} i={index} />
					);
				})}
				<CardPhoto images={images} />
				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl min-w-4xl min-w-[56rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
					<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white">
						\\links
					</h1>

					<div className="flex flex-col gap-4">
						<a
							href="https://www.youtube.com/watch?v=4xk_JyNoYdY"
							className="text-blue-400 underline italic"
						>
							Website Link
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
