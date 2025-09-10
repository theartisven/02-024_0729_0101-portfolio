import "../globals.css";
import { LuInstagram,LuLinkedin } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center h-[2rem] px-4 w-screen lg:max-w-[1000px] xl:max-w-[1200px] mb-4">
      <div className="text-base font-medium text-zinc-500   dark:text-zinc-50 flex flex-row gap-2 items-center">
        <div className="hidden md:block xl:flex xl:flex-row xl:gap-2  ">
          <Link
            href="https://www.linkedin.com/in/svenherokaufmann"
            className="hover:text-purple-500"
            alt="Linked Link"
          >
            <LuLinkedin />
          </Link>
        </div>
        <div>Sven Hero Kaufmann</div>
      </div>

      <div className="text-base font-medium text-zinc-500 dark:text-zinc-50 flex flex-row gap-2 items-center">
        <div className="hidden md:block xl:flex xl:flex-row xl:gap-2  ">
          <Link
            href="https://www.instagram.com/theartisven/"
            className="hover:text-purple-500"
            alt="Instagram Link"
          >
            <LuInstagram />
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
