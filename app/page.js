import CardCase from "../app/_components/cardCase";
import { caseStudies } from "./data";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const runtime = "edge";

export default function Home() {
  return (
    <div
      className="relative content flex flex-wrap items-start gap-4 p-4 w-full max-w-full  overflow-x-hidden overflow-y-scroll rounded 
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

    </div>
  );
}
