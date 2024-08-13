import "../globals.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Footer() {
	return (
		<footer className="flex flex-row justify-between items-center h-[1.66%] px-4 w-screen lg:max-w-[1000px] xl:max-w-[1200px] mb-4">
						<div className="text-base font-medium text-neutral-400 dark:text-white flex flex-row gap-2 items-center">
<div className="hidden xl:flex xl:flex-row xl:gap-2  "><FaLinkedin />

</div>
			<div >
				Sven Hero Kaufmann
			</div>
			</div>

			<div className="text-base font-medium text-neutral-400 dark:text-white flex flex-row gap-2 items-center">
<div className="hidden xl:flex xl:flex-row xl:gap-2  "><AiFillInstagram /><FaTwitter />

</div>
			<div >
				@theartisven
			</div>
			</div>
		</footer>
	);
}