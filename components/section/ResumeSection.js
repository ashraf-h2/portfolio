import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResumeBlock from "../blocks/ResumeBlock";
import ProjectCard, { ProjectDescriptionList } from "../cards/ProjectCard";
import H2 from "../headings/H2";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaRobot } from "react-icons/fa";
import { GiBarbecue, GiHamburger } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

export default function ResumeSection() {
  const options = {
    threshold: 0.3,
  };
  const [
    educationSectionRef,
    educationSectionInViewport,
    educationSectionEntry,
  ] = useInView(options);
  const [
    experienceSectionRef,
    experienceSectionInViewport,
    experienceSectionEntry,
  ] = useInView(options);
  const [projectSectionRef, projectSectionInViewport, projectSectionEntry] =
    useInView(options);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (projectSectionInViewport) {
      setActiveSection("project-section");
    } else if (experienceSectionInViewport) {
      setActiveSection("experience-section");
    } else if (educationSectionInViewport) {
      setActiveSection("education-section");
    }
  }, [
    projectSectionInViewport,
    experienceSectionInViewport,
    educationSectionInViewport,
  ]);

  return (
    <section className="font-poppins" id="resume-section">
      <div className="container mx-auto w-9/12">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-[25%] lg:block hidden">
            <nav className="m-0 top-[180px] sticky">
              <ul className="m-0 p-0">
                <StickyListItem
                  text="Education"
                  href="#education-section"
                  active={activeSection === "education-section"}
                />
                <StickyListItem
                  text="Work Experience"
                  href="#experience-section"
                  active={activeSection === "experience-section"}
                />
                <StickyListItem
                  text="Projects"
                  href="#projects-section"
                  active={activeSection === "project-section"}
                />
              </ul>
            </nav>
          </div>
          <div className="lg:flex-grow-0 lg:flex-shrink-0 lg:basis-3/4 lg:max-w-[75%]">
            <div
              id="education-section"
              className="mb-16"
              ref={educationSectionRef}
            >
              <H2>Education</H2>
              <ResumeBlock
                dates={[["Sep. 2019", "Jun. 2025"]]}
                heading="Bachelor of Engineering, Mechanical Engineering, specialization in Mechatronics"
                subheading="Toronto Metropolitan University"
                icon={<FaUserGraduate color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  <span className="font-bold">Courses</span>: Fluid Dynamics,
                  Thermodynamics and Heat Transfer, Statics and Strength of
                  Materials, Digital Systems, Dynamics, Electric Circuits,
                  Digital Computation and Programming, Manufacturing
                  Fundamentals
                </p>
              </ResumeBlock>
            </div>

            <div
              id="experience-section"
              className="mb-16"
              ref={experienceSectionRef}
            >
              <H2>Work Experience</H2>
              <ResumeBlock
                dates={[["Jul 2025", "Present"]]}
                heading="Engineering Trainee"
                subheading="VPC Group Inc."
                icon={<MdEngineering color="white" size={"24px"} />}
              >
            
              </ResumeBlock>
              <ResumeBlock
                dates={[["Aug 2023", "Sep 2024"]]}
                heading="Engineering Intern"
                subheading="VPC Group Inc."
                icon={<MdEngineering color="white" size={"24px"} />}
              >
              
              </ResumeBlock>
            </div>

            <div
              id="projects-section"
              className="mb-16"
              ref={projectSectionRef}
            >
              <H2 className="heading">Projects</H2>
              <div className="flex justify-center">
                <div className="grid auto-rows-max grid-cols-1 xl:gap-x-8 gap-x-5 gap-y-8 mt-3 mb-12 w-full">
                  <ProjectCard
                    projectName="Coffee Bean Destoner – 3D CAD Modeling & Electro-Mechanical Prototyping"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed a functional coffee bean destoner to separate stones from beans, creating 3D models and engineering drawings in SolidWorks, applying GD&T and fit tolerances to ensure 3D printability.`,
                          `Fabricated prototype components using PLA+ filament and snap-fit joints, performing iterative adjustments based on fit testing and dimensional deviations.`,
                          `Collaborated with teammates to integrate mechanical, electrical, and control systems, contributing to part alignment and system packaging during assembly.`,
                        ]}
                      />
                    }
                    images={Array.from(
                      [1, 2, 3, 4],
                      (x) => `/images/coffee-destoner/${x}.jpeg`
                    )}
                    alts={Array.from(
                      [1, 2, 3, 4],
                      (x) => `Coffee Bean Destoner ${x}`
                    )}
                    projectLink="/capstone.pdf"
                  />
                  <ProjectCard
                    projectName="Motor Housing Bearing Installer – Pneumatic Systems & PLC Integration"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed and built an autonomous electro-pneumatic system for press-fitting motor bearings, prioritizing operator safety using a dual push-button circuit compliant with OSHA machine safeguarding standards.`,
                          `Programmed a PLC to control pneumatic actuators for bearing insertion, achieving a consistent 30-second cycle time and meeting all functional and timing requirements.`,
                          `Integrated limit sensors and interlocks to ensure safe operation, and collaborated with team members on troubleshooting control logic and system reliability.`,
                        ]}
                      />
                    }
                    images={Array.from(
                      [1],
                      (x) => `/images/bearing-installer/${x}.jpeg`
                    )}
                    alts={Array.from([1], (x) => `Bearing Installer ${x}`)}
                    projectLink={"/bearing.pdf"}
                  />
                  <ProjectCard
                    projectName="VisionX – Assistive Device for Visual Impairment (Hackathon Project)"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Led a 4-member team at DeltaHacks 6 to develop a wearable obstacle-detection device for visually impaired users by integrating ultrasonic sensors.`,
                          `Designed the 3D-printed enclosure and organized internal component layout for compact wiring and sensor placement.`,
                          `Wrote Python scripts on a Raspberry Pi to process real-time distance data and control haptic feedback alerts.`,
                        ]}
                      />
                    }
                    images={Array.from(
                      [1, 2, 3, 4, 5],
                      (x) => `/images/visionx/visionx-${x}.jpg`
                    )}
                    alts={Array.from(
                      [1, 2, 3, 4, 5],
                      (x) => `VisionX Image ${x}`
                    )}
                    projectLink={"https://devpost.com/software/visionx"}
                  />
                  <ProjectCard
                    projectName="Self-Balancing Pendulum – Real-Time Control System Design"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Built a real-time control system for a self-balancing pendulum using embedded sensors, actuators, and microcontroller-based PID and pole-placement algorithms.`,
                          `Performed fault modeling and risk analysis using FMEA and Fishbone diagrams, identifying failure modes and integrating safety features into the mechanical and electrical design.`,
                          `Designed an HMI panel and implemented responsive control logic, using bottom-up and top-down reasoning to optimize system maintainability, signal filtering, and user interface layout.`,
                        ]}
                      />
                    }
                    images={Array.from(
                      [1, 2, 3, 4],
                      (x) => `/images/pendulum/${x}.jpeg`
                    )}
                    alts={Array.from(
                      [1, 2, 3, 4],
                      (x) => `Self-Balancing Pendulum ${x}`
                    )}
                    projectLink={"/pendulum.pdf"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyListItem({ text, href, active }) {
  return (
    <li className="list-none mb-[10px]">
      <Link href={href} legacyBehavior>
        <a
          className={classNames(
            "font-bold ml-5 text-lg relative transition-all duration-300",
            {
              "text-indigo-600 after:absolute after:top-1/2 after:-left-6 after:w-5 after:h-[2px] after:bg-indigo-700":
                active,
              "text-black dark:text-white": !active,
            }
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
