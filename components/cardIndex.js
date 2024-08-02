/* eslint-disable react/jsx-no-comment-textnodes */
import "../app/globals.css";
export default function CardIndex({
	i = 0,
	title = "Default Title",
	number = 1,
	description = "Default Description",
	length = 5,
	colorBG = "bg-blue-500", // Example default color
	colorOutline = "outline-blue-500",
}) {
	return (
		<div
			className="flex flex-col p-14 gap-7 bg-white rounded-xl max-w-4xl min-w-[56rem] outline outline-1 outline-gray-300" // Ensure
		>
			<div className="flex flex-row justify-between">
				<h1 className="font-jet text-3xl font-medium text-gray-800">
					//{title}
				</h1>
				<div className="text-base text-gray-400"># {number}</div>
			</div>

			<div className="font-jet text-l text-gray-600 leading-[150%] tracking-[1.3%] max-h-[412px]">
				{description}
			</div>

			<div className="flex flex-row justify-end gap-3">
				{Array.from({ length }, (_, i) => (
					<div
						key={i}
						className={`h-2 rounded-full ${
							i + 1 === number ? `w-7 ${colorBG}` : "w-2 bg-white"
						} outline outline-1 ${
							i + 1 === number ? colorOutline : "outline-gray-300"
						}`}
					></div>
				))}
			</div>
		</div>
	);
}
