import "../globals.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center h-[1.66%] px-4 w-screen lg:max-w-[1000px] xl:max-w-[1200px] mb-4">
      <div className="text-base font-medium text-neutral-500   dark:text-white flex flex-row gap-2 items-center">
        <div className="hidden md:block xl:flex xl:flex-row xl:gap-2  ">
          <Link
            href="https://www.linkedin.com/in/svenherokaufmann"
            className="hover:text-purple-500"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div>Sven Hero Kaufmann</div>
      </div>

      <div className="text-base font-medium text-neutral-500 dark:text-white flex flex-row gap-2 items-center">
        <div className="hidden md:block xl:flex xl:flex-row xl:gap-2  ">
          <Link
            href="https://www.instagram.com/theartisven/"
            className="hover:text-purple-500"
          >
            <AiFillInstagram />
          </Link>
          {/*           <Link
            href="https://www.linkedin.com/in/sven-hero-kaufmann-88a961141/"
            className="hover:text-purple-500"
          >
            <FaTwitter />
          </Link> */}
        </div>
        <div>@theartisven</div>
      </div>
    </footer>
  );
}
