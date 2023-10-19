import React from "react";
import { projects } from "../constants/constants";
import { styles } from "../style";

const Works = () => {
  return (
    <div id="work" className="mt-[10rem] flex flex-col items-center gap-6 px-2">
      <h2 className={styles.sectionHeadText}>My Projects</h2>
      {projects.map((project, id) => (
        <div
          data-aos="zoom-in"
          key={id}
          className="flex w-[90%] xs:w-4/5 max-w-[1024px] gap-10 flex-wrap my-10 move justify-center border border-secondary px-2 pb-8 xs:p-8 rounded-lg shadow-md"
        >
          <div className="relative w-60 md:w-80">
            <img
              src={project.bigScreenImage}
              alt={project.name}
              loading="lazy"
              className="w-full drop-shadow-[0_0_4px_white]"
            />

            <img
              src={project.smallScreenImage}
              alt={project.name}
              loading="lazy"
              className="absolute h-[170px] right-4 bottom-4"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h4 className="text-[1.5rem] font-semibold text-themeColor">
              {project.name}
            </h4>
            <p className={`${styles.sectionSubText}`}>{project.description}</p>
            <div className="gap-x-5 flex flex-wrap">
              {project.tags.map((tag, id) => (
                <span key={id} className={tag.color}>
                  #{tag.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-y-5 justify-center md:justify-start">
              <a
                className="bg-themeColor w-4/5 xs:w-auto text-center py-2 px-4 rounded-lg mr-3 hover:shadow-[0_0_10px_var(--theme-color)] active:rotate-[10deg]"
                href={project.demo}
                target="_blank"
              >
                Live Demo
              </a>
              <a
                className="bg-themeColor w-4/5 xs:w-auto text-center py-2 px-4 rounded-lg mr-3 hover:shadow-[0_0_10px_var(--theme-color)] active:rotate-[10deg]"
                href={project.source_code_link}
                target="_blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
