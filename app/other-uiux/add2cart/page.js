/* eslint-disable react/jsx-no-comment-textnodes */
import CardIndex from "../../_components/cardIndex";
import CardPhoto from "../../_components/cardPhoto";

import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
//import { cards } from "./data";

export const runtime = "edge";

export const metadata = {
  title: "Case Study for Harman Kardon",
};

export default function CaseStudy7() {
  const images = [
    {
      src: "../img/case_studies/add2cart/add2cart_1.webp",
      alt: "Overall view off the mobile screens.",
    },
    {
      src: "../img/case_studies/add2cart/add2cart_2.webp",
      alt: "closer look at the mobile wireframes.",
    },

  ];
  return (
    <div className="content w-full  p-4 gap-2 flex flex-col overflow-y-scroll rounded-md lg:max-w-[1000px] xl:max-w-[1200px] md:max-h-[80vh] 2xl:h-[840px] items-center overflow-x-hidden ">
      <div className="flex flex-col gap-2 items-center justify-center h-100vh lg:w-[1000px] min-w-[1200px] ">


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
              href="https://www.add2cart.io/"
              className=" underline text-xs"
            >
              link
            </a>
          </div>
</div>
    </div>
  );
}
