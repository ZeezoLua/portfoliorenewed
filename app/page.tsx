import Background from "@/components/Background";
import type { Metadata } from "next";
import TypeWriter from "@/components/TypeWriter";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <Background />
      <main className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-72px)] gap-8 md:gap-12 py-8 md:py-12 px-4 sm:px-6">
        <div className="flex justify-center items-center text-center">
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl text-[#FADFA1] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Ezz <br /> Mohamed
          </h1>
        </div>
        <div className="flex justify-center items-center w-full max-w-md rounded-full border-2 border-[#FADFA1] py-3 px-6 sm:py-4 sm:px-10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          <TypeWriter
            text={[
              "I'm a ^500 <b>Programmer</b>",
              "I'm a ^500 <b>UI Designer</b>",
              "I'm a ^500 <b>Game Dev</b>",
              "I'm a ^500 <b>Web Dev</b>",
            ]}
          />
        </div>
      </main>
    </>
  );
}
