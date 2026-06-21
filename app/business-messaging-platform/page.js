/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../_components/cardIndex";
import CardPhoto from "../_components/cardPhoto";
import { RiArrowLeftSLine, RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for BMP",
};

export default function CaseStudy2() {
  const images = [
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_01.webp",
      alt: "screen for flow builder. a node-based chatbot builder. part 1",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_02.webp",
      alt: "screen for flow builder. a node-based chatbot builder. part 2",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_03.webp",
      alt: "configuration screen for a universal chatbot.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_04.webp",
      alt: "setting and collection sidebar.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_05.webp",
      alt: "mobile version for reserver keywords.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_06.webp",
      alt: "audio call feature to be implemented.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_07.webp",
      alt: "screens for document analyzing ai. part 1",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_08.webp",
      alt: "screens for document analyzing ai. part 2",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_09.webp",
      alt: "screens for document analyzing ai. part 3",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_10.webp",
      alt: "screens for whatsapp flow builder.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_11.webp",
      alt: "screens for whatsapp flow builder and metrics data sources.",
    },
    {
      src: "../img/case_studies/business-messaging-platform/business-messaging-platform_12.webp",
      alt: "metrics data sources.",
    },
  ];
  return (
    <div className="content  w-full  p-4 gap-2 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden overflow-y-scroll">
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
            Business Messaging Platform
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

        <div className="flex flex-row justify-between items-center p-6 gap-2 bg-zinc-50 rounded-xl w-[90vw] outline outline-1 outline-zinc-300 dark:bg-zinc-900 dark:outline-none lg:w-[47rem]  ">
          <h1
            className={`text-green-500 font-medium font-jet dark:text-zinc-50 md:text-m `}
          >
            \\ video
          </h1>

          <div className="flex flex-col gap-2">
            <a
              href="https://www.youtube.com/watch?v=4xk_JyNoYdY"
              className=" underline text-xs  dark:text-green-500 "
            >
              link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
