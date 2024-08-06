import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";

export default function Home() {
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800 w-screen  flex flex-col gap-4 rounded-md lg:w-[1200px] lg:grid lg:grid-cols-3 2xl:h-[840px]">
			{caseStudies.map((caseStudy, index) => (
				<CardCase key={index} {...caseStudy} />
			))}
		</div>
	);
}
