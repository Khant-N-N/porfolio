import { styles } from "../style";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[30%] max-w-7xl flex justify-end items-start text-center xs:text-right gap-2 xs:gap-10`}
      >
        <div className="flex flex-col gap-4">
          <h1
            data-aos="slide-left"
            className={`${styles.heroHeadText} text-white`}
          >
            Hey, Welcome!{" "}
            <p>
              I'm <span className="text-themeColor">Khant Nyi Nyi</span>
            </p>
          </h1>
          <p data-aos="fade-right" className={`${styles.heroSubText}`}>
            I develop user interfaces and responsive web applications
          </p>
          <div className="flex justify-center">
            <a
              data-aos="fade-up"
              data-aos-delay="200"
              href="#contact"
              className="bg-themeColor py-2 px-4 rounded mt-4 hover:animate-pulse active:rotate-[10deg]"
            >
              Contact Me
            </a>
            <div className="loading mt-3">
              <svg height="48px" width="67px">
                <polyline
                  id="back"
                  points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                ></polyline>
                <polyline
                  id="front"
                  points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                ></polyline>
              </svg>
            </div>
            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href="#work"
              className="bg-themeColor py-2 px-4 rounded mt-4 hover:animate-pulse active:rotate-[10deg]"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-2 absolute xs:relative">
          {/* <div className="w-5 h-5 rounded-full bg-themeColor bottom-0 absolute bounce-animate" /> */}
          {/* <div className="w-1 sm:h-80 h-40 rounded-lg bg-gradient-to-t from-themeColor to-[rgba(60, 51, 80, 0)]" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
