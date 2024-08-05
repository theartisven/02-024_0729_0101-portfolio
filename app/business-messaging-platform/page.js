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
					Business Messaging Platform
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
			</div>
		</div>
	);
}
