import React from "react";
import { styles } from "../style";
import { technologies } from "../constants/constants";
const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-start px-8 my-9">
      <h2 className={styles.sectionHeadText}>Tools and Technology</h2>
      <div className="flex gap-6 flex-wrap justify-center mt-7">
        {technologies.map(({ name, icon, id }) => (
          <div
            data-aos="fade-right"
            data-aos-delay={`${id}00`}
            className="flex flex-col items-center"
            key={id}
          >
            <div className="h-[80px]">
              <img
                src={icon}
                alt={name}
                className="h-full transition-all duration-500 active:rotate-[360deg] hover:drop-shadow-[0_0_10px_#f1efef]"
              />
            </div>
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
