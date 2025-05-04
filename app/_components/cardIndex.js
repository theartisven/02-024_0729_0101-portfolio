import "../globals.css";
export default function CardIndex({
  i = 0,
  title = "Default Title",
  number = 1,
  description = "Default Description",
  length = 5,
  colorBG = "bg-green-500",
  colorOutline = "outline-green-500",
  colorFont = "text-green-500",
}) {
  return (
    <div className="flex flex-col p-6 gap-2 bg-white rounded-xl w-[90vw] lg:w-[47rem]  dark:bg-neutral-900 dark:outline-none">
      <div className="flex grow w-full justify-between">
        <h1
          className={`${colorFont} font-medium font-jet dark:text-white md:text-m `}
        >
          \\ {title}
        </h1>
        <div className="flex flex-row gap-2">
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
      <div className="font-jet text-xs md:text-l text-neutral-500 max-h-[412px] max-w-[85ch] dark:text-white whitespace-pre-line leading-[150%]">
        {description}
      </div>
    </div>
  );
}
