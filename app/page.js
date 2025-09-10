import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const runtime = "edge";

export default function Home() {
  return (
    <div
      className="relative content flex flex-wrap items-start gap-4 p-4 w-full max-w-full overflow-hidden rounded bg-neutral-50 dark:bg-neutral-800 
    h-[86vh]
    md:h-[86vh]
    lg:h-[86vh]
    lg:max-w-[1000px] 
    xl:max-w-[1440px] 
    2xl:h-[840px]"
    >
      {caseStudies.map((caseStudy, index) => (
        <CardCase key={index} {...caseStudy} />
      ))}
      <Link
        className="flex-row hidden justify-center items-center z-30 fixed bottom-[7rem] md:bottom-[8rem] lg:bottom-[7.5rem]  place-items-center l bg-neutral-300  text-neutral-500 dark:text-white dark:bg-neutral-700 px-4 py-2 rounded-full text-xs gap-2 sm:flex"
        href="/other-uiux"
      >
        more
        <MdOutlineArrowRightAlt />
      </Link>
    </div>
  );
}
