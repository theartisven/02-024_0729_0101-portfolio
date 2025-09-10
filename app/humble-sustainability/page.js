/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for Humble Sustainability",
};

export default function CaseStudy3() {
  const images = [
    {
      src: "../img/case_studies/humble-sustainability/humble-sustainability_1.webp",
      alt: "screenshot of mobile and desktop version for humble site.",
    },
    {
      src: "../img/case_studies/humble-sustainability/humble-sustainability_2.webp",
      alt: "screenshot of screen flow mobile and desktop version.",
    },
  ];
  return (
    <div className="content w-full  p-4 gap-2 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden">
      <div className="flex flex-col gap-2 items-center justify-center h-100vh lg:w-[1000px] min-w-[1200px] ">
        <div className="flex md:flex-row md:justify-between items-center gap-2 w-[90vw] lg:w-[47rem] flex-col">
          <Link
            href={"/"}
            className="outline-zinc-500 flex flex-row items-center gap-2 outline-xs dark:text-zinc-50 w-[105px]"
          >
            <RiArrowLeftSLine />
            back
          </Link>
          <div className="font-jet outline-xl text-xl  dark:text-zinc-50 text-center">
            Humble Sustainability
          </div>
          <div className="bg-green-500 outline-zinc-50 outline-si w-fit px-3 py-1 rounded-full outline-xs sm:flex sm:items-center gap-2 text-zinc-50 text-xs hidden">
            <RiCheckFill />
            DONE
          </div>
        </div>
        {cards.map((card, index) => {
          return (
            <CardIndex key={index} {...card} length={cards.length} i={index} />
          );
        })}

        <CardPhoto images={images} colorFont={"text-green-500"} />
      </div>
    </div>
  );
}
