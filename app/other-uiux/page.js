import CardCase from "../_components/cardCase";

import { caseStudies } from "./data";

export default function Other_Works() {
  return (
    <div
      className="relative content flex flex-wrap items-start gap-2 p-4 w-full max-w-full overflow-y-auto overflow-x-hidden rounded bg-neutral-50 dark:bg-neutral-800 
    md:max-h-[80vh] 
    lg:max-w-[1000px] 
    xl:max-w-[1200px] 
    2xl:h-[840px]"
    >
      {caseStudies.map((caseStudy, index) => (
        <CardCase key={index} {...caseStudy} />
      ))}
    </div>
  );
}
