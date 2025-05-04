import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const runtime = "edge";

export default function Home() {
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
      <Link
        className="flex-row hidden justify-center items-center z-30 fixed bottom-[6rem] right-[24rem]  bg-neutral-200 dark:bg-neutral-800 px-4 py-2 rounded-full text-xs gap-2 sm:flex"
        href="/other-uiux"
      >
        more
        <MdOutlineArrowRightAlt />
      </Link>
    </div>
  );
}
