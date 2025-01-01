import CardExplore from "../app/_components/cardExplores";
import { caseStudies } from "./data";

export default function Other_Works() {
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 max-w-full lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] p-4">
			{caseStudies.map((caseStudy, index) => (
				<CardExplore key={index} {...caseStudy} />
			))}
		</div>
	);
}
