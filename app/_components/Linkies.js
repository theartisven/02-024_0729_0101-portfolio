"use client";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Linkies(props) {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (
		<Link
			href={props.href}
			onClick={props.onClick}
			className={
				isActive
					? "text-purple-500 font-medium dark:text-purple-500 px-1 py-2 transition-all duration-200"
					: "text-neutral-500 dark:text-neutral-200 hover:text-purple-500 px-1 py-2 transition-all duration-200 "
			}
		>
			{props.name}
		</Link>
	);
}
