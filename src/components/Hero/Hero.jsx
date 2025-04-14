import styles from "./Hero.module.css";
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow_down_24px.svg";
import { ReactComponent as GithubIcon } from "../../assets/svgs/github.svg";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeaderContent}>
          <h1 className={styles.heroHeaderTitle}>MOVIE</h1>
        </div>
        <div className={styles.heroMiddleContent}>
          <div className={styles.socialContainer}>
            <p className={styles.socialText}>Follow us</p>
            <a
              href="https://github.com/parkjin21004"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <GithubIcon className={styles.githubIcon}></GithubIcon>
            </a>
          </div>
          <div className={styles.titleContent}>
            <div className={styles.subTitleContainer}>
              <div className={styles.rectangle}></div>
              <h2 className={styles.subTitle}>A MOVIE GUIDE</h2>
            </div>
            <div className={styles.maintTitleContainer}>
              <h1>Cinema Is A Way To Live</h1>
              <h1>Many Times Over.</h1>
            </div>
            <div className={styles.scrollDown}>
              scroll down
              <ArrowDown className={styles.arrowDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
