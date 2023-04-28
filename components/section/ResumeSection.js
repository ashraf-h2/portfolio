import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResumeBlock from "../blocks/ResumeBlock";
import ProjectCard, { ProjectDescriptionList } from "../cards/ProjectCard";
import H2 from "../headings/H2";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaRobot } from "react-icons/fa";
import { GiBarbecue, GiHamburger } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";

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
                dates={[["Sep. 2019", "Present"]]}
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
                dates={[["Oct. 2020", "Feb. 2021"]]}
                heading="TorontoMet Design League"
                subheading="Space Mining Robot"
                icon={<FaRobot color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Assembled a robotic arm on SolidWorks that utilises
                    jackhammers to drill through large rocks
                  </li>
                  <li>
                    Produced detailed drawings and assembly diagrams for all
                    parts of project as per requirements
                  </li>
                  <li>
                    Devised a solution to mine rocks on Mars to support
                    Earth&apos;s increasing demand for natural resources
                  </li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2020", "Sep. 2021"]]}
                heading="Simply BBQ"
                subheading="Supervisor"
                icon={<GiBarbecue color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>Assisted with catering and inventory management</li>
                  <li>
                    Exhibited strong communication abilities when communicating
                    with customer
                  </li>
                  <li>Handled large-scale orders, such as weddings</li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2020", "Sep. 2021"]]}
                heading="Coding Instructor"
                subheading="Lead Instructor"
                icon={<AiFillCode color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>Assisted with catering and inventory management</li>
                  <li>
                    Exhibited strong communication abilities when communicating
                    with customer
                  </li>
                  <li>Handled large-scale orders, such as weddings</li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2022", "Dec. 2022"]]}
                heading="Shawarma Royale, Scarborough"
                subheading="Manager"
                icon={<GiHamburger color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Managing inventory to ensure optimal stock levels and
                    availability
                  </li>
                  <li>
                    Resolving customer complaints and issues to improve
                    satisfaction
                  </li>
                  <li>Scheduling and handling sales to drive revenue</li>
                  <li>
                    Managing financial records and reports to support decision
                    making
                  </li>
                </ul>
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
                    projectName="VisionX"
                    projectSubtitle="Developed at DeltaHacks 6"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Led a group of 4 to create a device that assists individuals with visual impairment`,
                          `3D designed and managed all of the wired components`,
                          `Wrote Python scripts for Raspberry Pi to control the ultrasonic sensors`,
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
                  />
                  <ProjectCard
                    projectName="Automated Door Unlocking System"
                    projectSubtitle="Personal Project"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Created a door access solution for individuals with disabilities`,
                          `Used Arduino, servo motors, and fingerprint sensors to ensure secure and efficient operation`,
                        ]}
                      />
                    }
                  />
                  <ProjectCard
                    projectName="Arithmetic Logic Unit (ALU)"
                    projectSubtitle="16-bit ALU core in Intel Quartus"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed all the components of the device from scratch (Ex: Latches, 4-16 decoder, FSM, 7 segment etc)`,
                          `Implemented various operations such as addition, subtraction, modulation`,
                          `Tested by implementing the code on a FPGA (Field Programmable Gate Array)`,
                        ]}
                      />
                    }
                  />
                  <ProjectCard
                    projectName="Self-Driving Robot"
                    projectSubtitle="Arduino in C/C++"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Manufactured a chassis with 4 barriers through 3D printing to carry Arduino components and be the robot`,
                          `Assembled 10 component circuits using Arduino Nano and Breadboard to provide power for 2 motors and 2 sensors to operate`,
                        ]}
                      />
                    }
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
