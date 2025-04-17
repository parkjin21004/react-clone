import bgImage from "../../assets/images/interstellar-bg.png";
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow_down_24px.svg";
import { ReactComponent as GithubIcon } from "../../assets/svgs/github.svg";

function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-left-top bg-no-repeat flex items-start justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #03021d 80%), url(${bgImage})`,
      }}
    >
      <div className="w-[90%] h-[630px] mt-16 relative">
        <div className="absolute top-0 left-0">
          <h1 className="text-5xl font-chronicleSemi tracking-wide">MOVIE</h1>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
          <div className="flex flex-col justify-start">
            <p className="font-bold" style={{ writingMode: "vertical-lr" }}>
              Follow us
            </p>
            <a
              href="https://github.com/parkjin21004"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <GithubIcon className="w-6 h-6 mt-4"></GithubIcon>
            </a>
          </div>
          <div className="flex flex-col gap-6 lg:mr-40">
            <div className="flex items-center gap-2">
              <div className="bg-accent w-12 h-0.5"></div>
              <h2 className="text-accent font-gilroy font-extrabold text-base tracking-widest">
                A MOVIE GUIDE
              </h2>
            </div>
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-chronicleSemi">
              <h1>Cinema Is A Way To Live</h1>
              <h1>Many Times Over.</h1>
            </div>
            <div className="flex items-center gap-2 font-bold">
              scroll down
              <ArrowDown className="w-4 h-6 ml-2 color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
