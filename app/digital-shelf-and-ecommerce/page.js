/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for Digital shelf and Ecommerce",
};

export default function CaseStudy1() {
  const images = [
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_01.webp",
      alt: "digital shelf - slight modification for search terms screen.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_02.webp",
      alt: "digital shelf - market share screen for brands and products.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_03.webp",
      alt: "digital shelf - new edits for market screen after user feedback.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_04.webp",
      alt: "digital shelf - screens for voucher performances in time-based.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_05.webp",
      alt: "digital shelf - email alerts with trigger and condition.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_06.webp",
      alt: "digital shelf - screens sample for FAQ",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_07.webp",
      alt: "digital shelf - full view for homepage. part 1",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_08.webp",
      alt: "digital shelf - full view for homepage. part 2.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_09.webp",
      alt: "digital ecommerce - all screens created from scratch.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_10.webp",
      alt: "digital ecommerce - screens for sale overview and first subsection for sales section.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_11.webp",
      alt: "digital ecommerce - screens for first 2 subsections.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_12.webp",
      alt: "digital ecommerce - last 2 subsections. and finance section.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_13.webp",
      alt: "digital ecommerce - 7 subsections for customer chat like customer service and distribution.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_14.webp",
      alt: "digital ecommerce - additional screens.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_15.webp",
      alt: "digital ecommerce - mockup screens for integration",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_16.webp",
      alt: "digital ecommerce - screens for supply chain sections. part 1",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_17.webp",
      alt: "digital ecommerce - screens for supply chain sections. part 2",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_18.webp",
      alt: "digital ecommerce - screens for supply chain sections. part 3",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_19.webp",
      alt: "digital ecommerce - mockup for power bi version for temp use. part 1",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_20.webp",
      alt: "digital ecommerce - mockup for power bi version for temp use. part 2",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_21.webp",
      alt: "competitive analysis first draft.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_22.webp",
      alt: "competitive analysis second draft.",
    },
    {
      src: "../img/case_studies/digital-shelf-and-ecommerce/digital-shelf-and-ecommerce_23.webp",
      alt: "competitive analysis final version.",
    },
  ];
  return (
    <div className="content bg-neutral-50 w-full dark:bg-neutral-800 p-4 gap-2 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden o">
      <div className="flex flex-col gap-2 items-center justify-center h-100vh lg:w-[1000px] min-w-[1200px] ">
        <div className="flex md:flex-row md:justify-between items-center gap-2 w-[90vw] lg:w-[47rem] flex-col">
          <Link
            href={"/"}
            className="outline-neutral-500 flex flex-row items-center gap-2 outline-xs dark:text-white w-[105px]"
          >
            <RiArrowLeftSLine />
            back
          </Link>
          <div className="font-jet outline-xl text-xl  dark:text-white text-center">
            Digital Shelf and Ecommerce
          </div>
          <div className="bg-green-500 outline-white outline-si w-fit px-3 py-1 rounded-full outline-xs sm:flex sm:items-center gap-2 text-white text-xs hidden">
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

        <div className="flex flex-row justify-between items-center p-6 gap-2 bg-white rounded-xl w-[90vw] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none lg:w-[47rem]  ">
          <h1
            className={`text-green-500 font-medium font-jet dark:text-white md:text-m `}
          >
            \\ video
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.youtube.com/watch?v=4xk_JyNoYdY"
              className=" underline text-xs"
            >
              link 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
