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
      <main className="w-screen flex justify-start items-center h-[calc(100vh-72px)] flex-col gap-12 py-12">
        <div className="flex justify-center items-center">
          <h1 className="font-black text-3xl md:text-8xl drop-shadow-2xl text-[#FADFA1] text-center hover:scale-105 hover:-translate-y-1 transition-all">Ezz <br /> Mohamed</h1>
        </div>
        <div className="flex justify-center items-center rounded-full border-2 border-[#FADFA1] py-4 px-12 backdrop-blur-sm w-96 hover:scale-105 hover:-translate-y-1 transition-all">
          <TypeWriter text={["I'm a ^500 <b>Programmer</b>", "I'm a ^500 <b>Design Artist</b>", "I'm a ^500 <b>Software Engineer</b>"]} />
        </div>
      </main>
    </>
  );
}
