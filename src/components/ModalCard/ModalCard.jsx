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
  onClose,
}) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 w-5/6 h-5/6">
      <div
        className="relative w-full h-full items-center justify-center bg-background bg-cover bg-left-top bg-no-repeat flex flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, #03021d 95%), linear-gradient(to top, rgba(0, 0, 0, 0) 40%, #03021d 95%), url(${bgURL})`,
        }}
      >
        <button onClick={onClose}>
          <XIcon className="absolute top-6 right-6 w-6 h-6 fill-current text-white hover:text-red-400 transition-colors"></XIcon>
        </button>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between items-center w-5/6 h-5/6">
          <img src={posterURL} alt={title} className="max-h-full" />
          <div className="flex flex-col justify-center lg:ml-4 gap-8">
            <h1 className="text-white text-4xl font-bold font-chronicleSemi">
              {title}
            </h1>
            <div className=" text-slate-200 text-md font-gilroy font-semibold flex flex-col gap-2">
              <p>Year: {year}</p>
              <p>Genre: {genre.join(", ")}</p>
              <p>Runtime: {runtime} min</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="sm:w[300px] sm:h-[200px] md:w-[360px] md:h-[240px] xl:w-[480px] xl:h-[320px] 2xl:w-[600px] 2xl:h-[400px] w-full h-full">
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
    </div>
  );
}

export default ModalCard;
