import Link from "next/link";
import React from "react";
import ProjectDescriber from "./ProjectDescriber";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function AboutSection() {
  return (
    <div id="about-section">
      <Fade bottom>
        <ProjectDescriber
          leftDisplay={
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src="/hamayoon-about.JPG"
                alt="About Photo"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          }
          rightDisplay={
            <div className="xl:pl-20 lg:pl-10 font-poppins">
              <h2 className="mb-6 font-poppins font-bold text-5xl">About Me</h2>
              <p className="text-xl leading-relaxed">
                Highly motivated Mechanical Engineering student with experience
                in SolidWorks, Python, Java, JavaScript, HTML/CSS, Microsoft
                Office Suite, Adobe Photoshop, Arduino/Raspberry Pi and 3D
                Printing. Strong skills in prototyping, problem solving, 3D
                printing and design. Seeking a co-op opportunity to apply my
                knowledge and skills in a real-world setting and gain valuable
                industry experience.
              </p>

              <Fade bottom delay={50}>
                <div className="text-white w-max text-center border-indigo-600 border-4 hover:border-white text-base tracking-wide px-4 py-3 mt-5 font-sembold hover:scale-[102%] active:scale-[98%] rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-150 hover:shadow-2xl">
                  <Link href="/resume.pdf" passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer" download>
                      Download Resume
                    </a>
                  </Link>
                </div>
              </Fade>
            </div>
          }
        />
      </Fade>
    </div>
  );
}
