import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="content bg-neutral-100 dark:bg-neutral-800 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 max-w-full lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px]p-4">
      {caseStudies.map((caseStudy, index) => (
        <CardCase key={index} {...caseStudy} />
      ))}
    </div>
  );
}
