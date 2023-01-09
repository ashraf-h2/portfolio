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
                  Actively participating in mechanical, electronic and software
                  based projects.
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
                  <li>Managing inventory</li>
                  <li>Scheduling and handling sales</li>
                </ul>
              </ResumeBlock>
              <ResumeBlock
                dates={[["Jan. 2020", "Sep. 2021"]]}
                heading="Supervisor"
                subheading="Simply BBQ"
                icon={<GiBarbecue color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>Catering, managing inventory</li>
                  <li>
                    Demonstrated excellent communication skills while responding
                    to customers
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
                          `VisionX is a device that can help the visually impaired in
                      their daily life. It can be worn same as a VR headset and
                      incorporates a Raspberry Pi 3, an infrared night vision
                      camera, a set of ultrasonic sensors, a GPS module, and a pair
                      of bone conducting headphones.`,
                          `It is based on the TensorFlow framework and currently uses
                      Google's pre-trained model which is able to recognize many
                      everyday objects.`,
                          `It incorporates Google Assistant which allows for the user to
                      do many tasks, one of which is to make a grocery list.`,
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
                    projectName="aslX"
                    projectSubtitle="Developed at DeltaHacks 7"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `aslX uses MediaPipe's Hands API to detect ASL and produces subtitles over video calls!`,
                          `How it works: MediaPipe's Hands API provides precise keypoint localization of 21 3D hand-knuckle coordinates. These coordinates are then matched against pre-defined ASL words' coordinates to find similarities.`,
                        ]}
                      />
                    }
                  />
                  <ProjectCard
                    projectName="Integrated DoorLock"
                    // projectSubtitle="Developed at DeltaHacks 7"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Integrated Door Lock System is a system that helps the differently abled in unlocking and locking their apartment doors.`,
                          `The system has a device that sits behind the door of the apartment and waits for a signal to unlock or lock the door. Once a command is received, the device pushes or pulls the door knob.`,
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
