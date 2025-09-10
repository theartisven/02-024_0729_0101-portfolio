/* eslint-disable react/jsx-no-comment-textnodes */
import "../globals.css";
import ImageWithModal from "../_components/ImageWithModal";
import VideoWithModal from "../_components/VideoWithModal";

export default function CardPhoto({ images, colorFont }) {
  // Determine the number of columns based on the number of images
  const columnClass = images.length > 4 ? "md:columns-3" : "md:columns-2";

  return (
    <div className="flex flex-col p-6 gap-2 bg-zinc-50 rounded-xl w-[90vw] lg:w-[47rem]   dark:bg-zinc-900 dark:outline-none">
      <h1
        className={`${colorFont} font-medium font-jet dark:text-zinc-50 md:text-m `}
      >
        \\ photo
      </h1>
      <div className={`${columnClass} columns-1  gap-2 gap-x-2`}>
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
