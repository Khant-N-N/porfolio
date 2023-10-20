import React from "react";
import { styles } from "../style";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-start px-8">
      <h2 data-aos="fade-right" className={styles.sectionHeadText}>
        About Me
      </h2>
      <p
        data-aos="fade-up-right"
        className={`${styles.sectionSubText} max-w-[700px] mt-2 mb-10`}
      >
        I am a Front-End Developer, aiming to be a Full-stack Developer with a
        passion for building beautiful and user-friendly websites. I have a
        strong understanding of front-end development, and I am excited to put
        my skills to use in a professional setting. I am a quick learner and a
        team player, and I am confident that I can be a valuable asset to any
        web development team.
      </p>
    </div>
  );
};

export default About;
