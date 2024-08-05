/* eslint-disable react/jsx-no-comment-textnodes */
import "../globals.css";
import ImageWithModal from "../_components/ImageWithModal";
import VideoWithModal from "../_components/VideoWithModal";
export default function CardPhoto({ images }) {
	return (
		<div
			className="flex flex-col p-6 gap-7 bg-white rounded-xl w-[56rem] outline outline-1 outline-neutral-300 dark:bg-neutral-900 dark:outline-none" // Ensure
		>
			<h1 className="font-jet text-xl font-medium  text-neutral-800 dark:text-white">
				\\photos
			</h1>
			<div className="columns-3 gap-4 gap-x-2">
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
