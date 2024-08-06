import "../globals.css";

export default function Footer() {
	return (
		<footer className="flex flex-row justify-between items-center h-[1.66%] px-4 w-screen lg:max-w-[1000px] xl:max-w-[1200px] mb-4">
			<div className=" text-base font-semibold text-neutral-400 dark:text-white">
				Sven Hero Kaufmann
			</div>

			<div className="text-base font-medium text-neutral-400 dark:text-white">
				@theartisven
			</div>
		</footer>
	);
}