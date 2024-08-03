"use client";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Linkies(props) {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (
		<div
			className={
				isActive
					? "text-purple-700 font-medium dark:text-purple-700"
					: "text-neutral-500 dark:text-neutral-500 hover:text-purple-700"
			}
		>
			<Link href={props.href}>{props.name}</Link>
		</div>
	);
}
