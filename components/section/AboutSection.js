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
                src="/hamayoon-about.jpeg"
                alt="About Photo"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          }
          rightDisplay={
            <div className="xl:pl-20 lg:pl-10 font-poppins">
              <h2 className="mb-6 font-poppins font-bold text-5xl">About Me</h2>
              <p className="text-lg leading-relaxed">
                Mechanical Engineering graduate with a strong foundation in
                maintenance, reliability, and mechanical design. Experienced in
                working with piping systems, P&IDs, PFDs, and isometric
                drawings. Proficient in preventive maintenance planning, spare
                parts management, and asset tracking using Limble CMMS.
                Supported chemical offloading systems and Pre-Start Health and
                Safety Reviews (PSR) through hands-on field inspections and
                documentation updates.
              </p>
              <p className="text-lg leading-relaxed pt-2">
                Skilled in automation and controls, including PLC programming,
                embedded systems (Arduino, Raspberry Pi), and electro-pneumatic
                integration. Technically proficient in SolidWorks, AutoCAD, SAP,
                MATLAB, Python, and the Microsoft Office Suite. Known for strong
                communication, organization, and problem-solving abilities, with
                a collaborative approach to engineering challenges and
                cross-functional teamwork.
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
