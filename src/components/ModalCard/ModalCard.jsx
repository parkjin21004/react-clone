import YouTube from "react-youtube";
import { ReactComponent as XIcon } from "../../assets/svgs/x-24.svg";

function ModalCard({
  title,
  genre,
  year,
  runtime,
  rating,
  posterURL,
  bgURL,
  trailerCode,
  summary,
  onClose,
}) {
  return (
    <div
      className="relative w-full h-full items-center justify-center bg-background bg-cover bg-left-top bg-no-repeat flex flex-col "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, #03021d 95%), linear-gradient(to top, rgba(0, 0, 0, 0) 40%, #03021d 95%), url(${bgURL})`,
      }}
    >
      <button onClick={onClose}>
        <XIcon className="absolute top-6 right-6 w-6 h-6 fill-current text-white hover:text-red-400 transition-colors"></XIcon>
      </button>
      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-row justify-between items-center lg:w-5/6 lg:h-5/6 w-full h-full px-4 pt-16 pb-4 lg:p-0">
        <img
          src={posterURL}
          alt={title}
          className="max-h-full hidden lg:block"
        />
        <div className="flex flex-col justify-first lg:w-1/2 lg:ml-4 gap-8 w-full h-full ">
          <h1 className="text-white text-4xl font-bold font-chronicleSemi">
            {title}
          </h1>
          <div className=" text-slate-200 text-md font-gilroy font-semibold flex flex-col gap-2">
            <p className="line-clamp-1">Year: {year}</p>
            <p className="line-clamp-1">Genre: {genre.join(", ")}</p>
            <p className="line-clamp-1">Runtime: {runtime} min</p>
            <p className="line-clamp-1">Rating: {rating}</p>
          </div>
          <div className="max-h-[40vh] overflow-y-auto text-slate-200 text-md font-gilroy font-semibold block lg:hidden">
            <p>{summary}</p>
          </div>
          <div className="aspect-video w-full h-auto order-first lg:order-none">
            <YouTube
              className="w-full h-full"
              videoId={trailerCode}
              opts={{ width: "100%", height: "100%" }}
              onEnd={(event) => {
                event.target.stopVideo(0);
              }}
            ></YouTube>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
