"use client";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Linkies(props) {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (

			<Link href={props.href} className={
				isActive
					? "text-purple-700 font-medium dark:text-purple-700 px-1 py-2 transition-all duration-200"
					: "text-neutral-500 dark:text-neutral-500 hover:text-purple-700 px-1 py-2 transition-all duration-200 "
			}>{props.name}</Link>
	);
}
