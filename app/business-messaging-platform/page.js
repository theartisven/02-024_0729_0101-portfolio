/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export default function CaseStudy2() {
	const images = [
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_01.webp",
			alt: "business-messaging-platform_01.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_02.webp",
			alt: "business-messaging-platform_02.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_03.webp",
			alt: "business-messaging-platform_03.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_04.webp",
			alt: "business-messaging-platform_04.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_05.webp",
			alt: "business-messaging-platform_05.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_06.webp",
			alt: "business-messaging-platform_06.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_07.webp",
			alt: "business-messaging-platform_07.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_08.webp",
			alt: "business-messaging-platform_08.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_09.webp",
			alt: "business-messaging-platform_09.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_10.webp",
			alt: "business-messaging-platform_10.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_11.webp",
			alt: "business-messaging-platform_11.webp",
		},
		{
			src: "../img/case_studies/business-messaging-platform/business-messaging-platform_12.webp",
			alt: "business-messaging-platform_12.webp",
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
					Business Messaging Platform
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

				<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none lg:w-[54rem]  ">
					<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white">
						\\links
					</h1>

					<div className="flex flex-col gap-4">
						<a
							href="https://www.youtube.com/watch?v=4xk_JyNoYdY"
							className="text-blue-400 underline italic"
						>
							Youtube Link
						</a>
						<iframe
							width="100%"
							height="auto"
							src="https://www.youtube.com/embed/4xk_JyNoYdY?si=smspL17hY7xFv6Y6"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
