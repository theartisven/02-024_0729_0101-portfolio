import "../globals.css";
export default function CardIndex({
	i = 0,
	title = "Default Title",
	number = 1,
	description = "Default Description",
	length = 5,
	colorBG = "bg-blue-500",
	colorOutline = "outline-blue-500",
}) {
	return (
		<div className="flex flex-col p-6 gap-4 bg-white rounded-xl max-w-4xl min-w-[56rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
			<div className="flex flex-row justify-between">
				<h1 className="font-jet text-xl font-medium text-neutral-800  dark:text-white">
					\\{title}
				</h1>
				<div className="text-base text-neutral-400 dark:text-white">
					# {number}
				</div>
			</div>

			<div className="font-jet text-l text-neutral-500 leading-[150%] tracking-wide max-h-[412px] max-w-[84ch] dark:text-white whitespace-pre-line">
				{description}
			</div>

			<div className="flex flex-row justify-end gap-3">
				{Array.from({ length }, (_, i) => (
					<div
						key={i}
						className={`h-2 rounded-full ${
							i + 1 === number
								? `w-7 ${colorBG}`
								: "w-2 bg-white dark:bg-neutral-900"
						} outline outline-1 ${colorOutline}`}
					></div>
				))}
			</div>
		</div>
	);
}
