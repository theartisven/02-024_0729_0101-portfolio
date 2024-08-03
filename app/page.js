import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";

export default function Home() {
	return (
		<div className="content bg-neutral-100 dark:bg-neutral-800 w-full min-h-[748px] max-h-[77.77%] grid gap-4 grid-rows-3 grid-cols-3">
			{caseStudies.map((caseStudy, index) => (
				<CardCase key={index} {...caseStudy} />
			))}
		</div>
	);
}
