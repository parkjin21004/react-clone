import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow_right_24px.svg";

function MovieCard({ index, title, genre, summary = "", posterURL }) {
  return (
    <div className={"container mx-auto px-4 py-8 my-20"}>
      <div
        className={`flex flex-col justify-between w-full max-w-5lg mx-auto gap-6 lg:gap-0 ${
          index % 2 === 0
            ? "lg:flex-row-reverse place-items-center"
            : "lg:flex-row place-items-center"
        }`}
      >
        <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
          <img
            src={posterURL}
            alt={`${title} Poster`}
            className="w-1/2 h-auto object-contain lg:h-full lg:object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex lg:justify-end justify-center items-center">
          <div className="relative w-1/2 lg:w-3/4">
            <div className="absolute -top-14 -left-24 lg:-top-16 lg:-left-24 z-0 font-gilroy font-extrabold text-9xl text-white opacity-30">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div className="flex flex-col w-full h-full gap-3">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-accent w-12 h-0.5"></div>
                <h2 className="font-gilroy font-extrabold text-1xl text-accent">
                  {genre[0]}
                </h2>
              </div>
              <h1 className="font-chronicleSemi text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white">
                {title}
              </h1>
              <div className="font-gilroy font-extrabold text-sm text-white ">
                <p className="line-clamp-5">{summary}</p>
              </div>
              <div className="font-gilroy font-extrabold text-1xl text-accent flex felx-row items-center gap-2">
                read more
                <ArrowDown className="w-6 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
