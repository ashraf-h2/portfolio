import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResumeBlock from "../blocks/ResumeBlock";
import ProjectCard, { ProjectDescriptionList } from "../cards/ProjectCard";
import H2 from "../headings/H2";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import { GiBarbecue, GiHamburger } from "react-icons/gi";
import ProjectCardTest from "../cards/ProjectCardTest";
import Fade from "react-reveal/Fade";

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
                  <span className="font-bold">Courses</span>: Thermodynamics,
                  Digital Systems, Electric Machines and Actuators, Machine
                  Design, Heat Transfer, Microprocessor Systems, Fluid Mechanics
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
                dates={[["Feb. 2022", "Current"]]}
                heading="Manager (Part-Time)"
                subheading="Shawarma Royale, Scarborough"
                icon={<GiHamburger color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Managing inventory to ensure optimal stock levels and
                    availability
                  </li>
                  <li>Scheduling and handling sales to drive revenue</li>
                  <li>
                    Resolving customer complaints and issues to improve
                    satisfaction
                  </li>
                  <li>
                    Managing financial records and reports to support decision
                    making
                  </li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2020", "Sep. 2021"]]}
                heading="Supervisor"
                subheading="Simply BBQ"
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
                            `Led a group of 4 to create a device that assists individuals with visual impairments`,
                            `Integrated Tensorflow framework to perform object recognition`,
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
                      projectName="Implementation of Simple Processor "
                      projectSubtitle="Developed at TMU University"
                      projectText={
                        <ProjectDescriptionList
                          list={[
                            `Designed and implementation of simple 8-bit microprocessor`,
                            `The processor consisted of ALU, Registers to store data, and control unit`,
                            `Performed simple mathematical operations using altera boards`,
                          ]}
                        />
                      }
                    />
                    <ProjectCard
                      projectName="Automated Door Unlocking System"
                      // projectSubtitle="Developed at DeltaHacks 7"
                      projectText={
                        <ProjectDescriptionList
                          list={[
                            `Created a door access solution for individuals with disabilities by designing a system that utilizes a fingerprint sensor and rack gear mechanism`,
                            `Used Arduino, servo motors, and fingerprint sensors to ensure secure and efficient operation`,
                          ]}
                        />
                      }
                    />
                    <ProjectCard
                      projectName="Blind Spot Car Detector"
                      // projectSubtitle="Developed at DeltaHacks 7"
                      projectText={
                        <ProjectDescriptionList
                          list={[
                            `Blind spot car detection device to assist driving in old vehicles`,
                            `Allows users to get an alert while changing lanes if a car is in the blind spot`,
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
