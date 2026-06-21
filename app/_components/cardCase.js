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
className="
  cardcase
  h-[12rem]
  w-full
  md:w-[calc((100%-1rem)/2)]
  lg:w-[calc((100%-2rem)/3)]
  overflow-hidden
  rounded-lg
  bg-zinc-50
  shadow-lg
  dark:bg-zinc-900
  relative
"
  >
    <Link
      href={isActive ? props.href : ""}
      className="
  flex
  h-full
  flex-col
  p-2
"
    >
      {/* Header */}
      <div className="
  flex
  items-center
  justify-between
">
        {Array.isArray(props.tags) &&
          props.tags.map((tag, index) => (
            <h2
              key={index}
              className="text-[10px] text-zinc-500 font-jet whitespace-pre-line leading-[150%]"
            >
              {tag}
            </h2>
          ))}
      </div>

      {/* Title */}
      <h1 className="
  mt-4
  h-8
  line-clamp-2
  font-jet
  font-medium
  text-zinc-700
  dark:text-zinc-50
">
        {props.title}
      </h1>

      {/* Description */}
      <div className="
  mt-2

  overflow-hidden
">
        <p className="
  font-jet
  text-xs
  leading-[150%]
  text-zinc-500
  dark:text-zinc-400
  line-clamp-4
  whitespace-pre-line
">
          {isActive
            ? props.description
            : "The page is currently being worked on."}
        </p>
      </div>

{/* Footer */}
<div
  className={`
    absolute
    bottom-2
    left-2
    right-2
    flex
    items-center
    justify-between
    pt-2
    ${isActive ? props.colorFont : "text-zinc-500"}
  `}
>
  {/* Left icons */}
  <div className="flex gap-2 text-[0.75rem]">
    {props.icon.map((icon, index) => (
      <span key={index}>{icon}</span>
    ))}
  </div>

  {/* Right icons */}
  <div className="flex gap-2 text-[0.75rem] items-center">
    <span>{props.leftIcon}</span>
    <span>{isActive ? props.rightIcon : <FaLock />}</span>
  </div>
</div>
    </Link>
  </motion.div>
);
}
