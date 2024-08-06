/* eslint-disable react/jsx-no-comment-textnodes */
import "../globals.css";
import ImageWithModal from "../_components/ImageWithModal";
import VideoWithModal from "../_components/VideoWithModal";

export default function CardPhoto({ images }) {
	// Determine the number of columns based on the number of images
	const columnClass =
		images.length > 3
			? "md:columns-3"
			: "md:flex md:flex-row";

	return (
		<div className="flex flex-col p-6 gap-4 bg-white rounded-xl w-[90vw] lg:w-[54rem]  outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none">
			<h1 className="font-jet text-xl font-medium text-neutral-800 dark:text-white">
				\\photos
			</h1>
			<div className={`${columnClass} columns-1  gap-4 gap-x-2`}>
				{images.map((media, index) => {
					const isWebP = media.src.endsWith(".webp");
					const isWebM = media.src.endsWith(".webm");

					if (isWebP) {
						return (
							<ImageWithModal key={index} src={media.src} alt={media.alt} />
						);
					} else if (isWebM) {
						return (
							<VideoWithModal key={index} src={media.src} alt={media.alt} />
						);
					} else {
						return null; // Optionally handle other cases
					}
				})}
			</div>
		</div>
	);
}
