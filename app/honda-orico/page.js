/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for Honda Orico",
};

export default function CaseStudy9() {
  const images = [
    {
      src: "../img/case_studies/honda-orico/honda-orico_1.webp",
      alt: "overall view of the mobile wireframe and design proposal I've done.",
    },
    {
      src: "../img/case_studies/honda-orico/honda-orico_2.webp",
      alt: "closer look at the mobile wireframes for the client standby.",
    },
    {
      src: "../img/case_studies/honda-orico/honda-orico_3.webp",
      alt: "closer look at the initial design proposal for the client side of the platfrom.",
    },
    {
      src: "../img/case_studies/honda-orico/honda-orico_4.webp",
      alt: "desktop version of the platfrom.",
    },
    {
      src: "../img/case_studies/honda-orico/honda-orico_5.webp",
      alt: "mobile wireframe for the dealer side.",
    },
    {
      src: "../img/case_studies/honda-orico/honda-orico_6.webp",
      alt: "intial design proposal for the dealer side.",
    },
  ];
  return (
    <div className="content w-full  p-4 gap-2 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden ">
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
            Honda Orico
          </div>
          <div className="bg-green-500 outline-zinc-50 outline-si w-fit px-3 py-1 rounded-full outline-xs flex items-center gap-2 text-zinc-50 text-xs w-[105px]">
            <IoIosDocument />
            On Going
          </div>
        </div>
        {cards.map((card, index) => {
          return (
            <CardIndex key={index} {...card} length={cards.length} i={index} />
          );
        })}

        <CardPhoto images={images} colorFont="text-green-500" />
      </div>
    </div>
  );
}
