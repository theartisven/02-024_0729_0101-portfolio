"use client";
import "../globals.css";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CardCase(props) {
  const isActive = props.status === "active";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0.25,
      }}
      className="cardcase gap-2 w-full grow sm:w-[50%] lg:w-[40%] xl:w-[30%] md:h-[31%] xl:h-[31%]  bg-zinc-50 flex flex-col justify-between content-between p-4 rounded-lg shadow-lg dark:bg-zinc-900 lg:gap"
    >
      <Link
        href={isActive ? props.href : ""}
        className="flex h-full justify-between flex-col gap-2"
      >
        <div className="flex flex-row justify-between items-center w-full">
          {Array.isArray(props.tags) && props.tags.length > 0 ? (
            props.tags.map((tag, index) => (
              <h2
                key={index}
                className="text-[10px] text-zinc-500 font-jet dark:text-zinc-500 whitespace-pre-line leading-[150%]"
              >
                {tag}
              </h2>
            ))
          ) : (
            <p>No tags available</p> // You can show something else when `tags` is empty or not an array
          )}
        </div>


        {/* Content Section */}
        <h1
          className={`${
            isActive ? props.colorFont : "text-zinc-500"
          } font-medium font-jet dark:text-zinc-50 md:text-m `}
        >
          {props.title}
        </h1>

        <div className="flex flex-col gap-x-3">
          <h2 className="text-xs text-zinc-500 font-jet text-ellipsis overflow-hidden line-clamp-3 text-pretty dark:text-zinc-400  whitespace-pre-line leading-[150%]">
            {isActive
              ? props.description
              : "The page is currently being worked on.\n\n\n"}
          </h2>
        </div>
        

        {/* Footer Section */}
        <div
          className={`flex flex-row justify-between items-center w-full ${
            isActive ? props.colorFont : "text-zinc-500"
          }  dark:bg-zinc-900`}
        >
          <div className="flex flex-row gap-2">
            {props.icon.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <div
            className={`flex flex-row justify-between items-center w-full ${
            isActive ? props.colorFont : "text-zinc-500"
          }  dark:bg-zinc-900 md:text-[0.75rem]`}
            >
              {props.leftIcon}
            </div>

            <div
            className={`flex flex-row justify-between items-center w-full ${
            isActive ? props.colorFont : "text-zinc-500"
          }  dark:bg-zinc-900 md:text-[0.75rem]`}
            >
              {isActive ? props.rightIcon : <FaLock />}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
