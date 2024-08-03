import "../globals.css";
import Image from "next/image";
import Linkies from "./Linkies";
import Logo from "../../public/logo.png";

export default function Navbar() {
	return (
		<nav className="flex flex-row justify-between items-center bg-neutral-100 h-[6.66%]">
			<Image src={Logo} width={44} height={44} alt="Picture of the author" />
			<div className="flex gap-4	 flex-row">
				<Linkies name="curated" href="/" />
				<div className="text-violet-500 font-medium">//</div>
				{/* <Linkies name="exploration" href="/exploration" />
				<div className="text-violet-500 font-medium">//</div>
				<Linkies name="learning" href="/learning" />
				<div className="text-neutral-200 font-medium">/</div>
				<Linkies name="other-stuff" href="/other-stuff" />
				<div className="text-violet-500 font-medium">//</div> */}
				<Linkies name="about-me	" href="/about-me" />
			</div>
		</nav>
	);
}
