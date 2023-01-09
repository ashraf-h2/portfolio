import Link from "next/link";
import React from "react";
import ProjectDescriber from "./ProjectDescriber";
import Image from "next/image";

export default function AboutSection() {
  return (
    <ProjectDescriber
      leftDisplay={
        <div className="w-full h-full relative">
          <Image
            src="/hamayoon-about.png"
            alt="About Photo"
            width={500}
            height={500}
          />
        </div>
      }
      rightDisplay={
        <div className="xl:pl-20 lg:pl-10 font-poppins">
          <h2 className="mb-6 font-poppins font-bold text-5xl">About Me</h2>
          <p className="text-xl leading-relaxed">
            I am currently enrolled in level 3 of the 4-year Mechanical
            Engineering program at Toronto Metropolitan University. I have developed
            strong skills in Python, Java, C, JavaScript, TypeScript, HTML, CSS,
            Angular, ReactJS, VueJS, Spring Boot and Django through
            participation in various projects. I have achieved excellent time
            management and teamwork skills through participation in hackathons
            and have showcased exceptional analytical and problem solving skills
            through course work.
          </p>
          <div className="text-white w-max text-center border-indigo-600 border-4 hover:border-white text-base tracking-wide px-4 py-3 mt-5 font-sembold hover:scale-[102%] active:scale-[98%] rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-150 hover:shadow-2xl">
            <Link href="/assets/resume.pdf" passHref legacyBehavior>
              <a target="_blank" rel="noreferrer" download>
                Download Resume
              </a>
            </Link>
          </div>
        </div>
      }
    />
  );
}
