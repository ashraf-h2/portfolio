import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/section/AboutSection";
import ResumeSection from "../components/section/ResumeSection";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <div className="h-screen bg-white text-black dark:bg-black dark:text-white grid place-content-center overflow-hidden select-none">
        <div className="relative bottom-5">
          <span className="leading-[160px] block tracking-[0.2em] -mr-[0.2em] lg:tracking-widest text-[10vw] xl:text-[220px] text-indigo-500 fade font-extrabold relative">
            HAMAYOON
          </span>
          <div className="absolute fade-image xl:-top-[240px] xl:left-64 z-50 inline-block -top-4 left-8">
            <Image
              src="/hamayoon-visionx.png"
              alt="Hamayoon VisionX"
              width={1000}
              height={1000}
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </div> */}
      <div className="h-screen bg-white text-black dark:bg-black dark:text-white flex items-center overflow-hidden select-none">
        <div className="relative bottom-16 xl:bottom-24 w-full">
          <div className="leading-[10vw] block absolute w-full text-[13vw] -mr-[0.1em] tracking-[0.1em] text-center text-indigo-500 fade font-extrabold">
            HAMAYOON
          </div>
          <div className="absolute fade-image -bottom-[26vw] left-[28%] z-50">
            <img src="/hamayoon-visionx2.png" className="w-[45vw]" />
          </div>
        </div>
      </div>
      <div className="dark:bg-black">
        <SpaceFiller />
        <AboutSection />
        <SpaceFiller />
        <ResumeSection />
        <SpaceFiller />
      </div>
    </div>
  );
}
