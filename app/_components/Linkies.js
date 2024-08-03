"use client";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Linkies(props) {
	const pathname = usePathname();
	const isActive = pathname === props.href;

	return (
		<div className={isActive ? "text-purple-800 font-medium" : "text-gray-500"}>
			<Link href={props.href}>{props.name}</Link>
		</div>
	);
}
