import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white grid place-content-center">
      <div className="relative">
        <span className="leading-[160px] lg:text-[220px] text-indigo-500 fade font-extrabold absolute top-60 tracking-widest -left-[255px]">HAMAYOON</span>
        <div className="relative fade-image">
          <Image
            src="/hamayoon-visionx.png"
            alt="Hamayoon VisionX"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
