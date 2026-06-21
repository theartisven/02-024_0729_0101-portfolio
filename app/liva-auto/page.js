/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for Liva Auto",
};

export default function CaseStudy9() {
  const images = [
    {
      src: "../img/case_studies/liva-auto/liva-auto_1.webp",
      alt: "overall view of the mobile wireframe and design proposal I've done.",
    },
    {
      src: "../img/case_studies/liva-auto/liva-auto_2.webp",
      alt: "closer look at the mobile wireframes for the client.",
    },
    {
      src: "../img/case_studies/liva-auto/liva-auto_3.webp",
      alt: "closer look at the initial design proposal for the client side of the platfrom.",
    },
    {
      src: "../img/case_studies/liva-auto/liva-auto_4.webp",
      alt: "desktop version of the platfrom.",
    },
    {
      src: "../img/case_studies/liva-auto/liva-auto_5.webp",
      alt: "mobile wireframe for the dealer side.",
    },
    {
      src: "../img/case_studies/liva-auto/liva-auto_6.webp",
      alt: "intial design proposal for the dealer side.",
    },
        {
      src: "../img/case_studies/liva-auto/liva-auto_7.webp",
      alt: "overall finish screen for desktop and mobile.",
    },
        {
      src: "../img/case_studies/liva-auto/liva-auto_8.webp",
      alt: "sample of the general section for the design specification.",
    },
        {
      src: "../img/case_studies/liva-auto/liva-auto_9.webp",
      alt: "sample of the components section for the design specification.",
    },
        {
      src: "../img/case_studies/liva-auto/liva-auto_10.webp",
      alt: "sample of the general section for the design specification.",
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
            Liva Auto
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
              <div className="flex flex-row justify-between items-center p-6 gap-2 bg-zinc-50 rounded-xl w-[90vw] outline outline-1 outline-zinc-300 dark:bg-zinc-900 dark:outline-none lg:w-[47rem]  ">
          <h1
            className={`text-green-500 font-medium font-jet dark:text-zinc-50 md:text-m `}
          >
            \\ site
          </h1>
          <div className="flex flex-col gap-2 dark:text-green-500 ">
            <a
              href="https:https://liva-auto.id"
              className=" underline text-xs"
            >
              link
            </a>
          </div>
</div>
    </div>
  );
}
