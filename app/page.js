'use client'
import Navbar from "@/components/Navbar";
import { WordRotate } from "@/components/magicui/word-rotate";
import { RetroGrid } from "@/components/magicui/retro-grid";
export default function Home() {
  return (
    <div>
      <div className="hidden md:flex max-h-screen">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="absolute top-12 right-8">
          <WordRotate className='text-6xl text-gray-700' words={["Welcome", "Hii", "नमस्ते", "Holaa", , "你好", "Hello"]} />
        </div>
        <span className="pointer-events-none absolute top-96 left-40 z-10 w-96 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
          <WordRotate words={["Welcome to my portfolio", "Click on Navbar for visiting"]} />
        </span>
        <RetroGrid />
      </div>

      {/*mobile user interface*/}
      <div className="md:hidden flex h-screen bg-center bg-cover" style={{ backgroundImage: "URL('/mobback.svg')" }}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
          <Navbar />
          </div>
          <div className="text-white text-4xl font-bold absolute left-1/2 top-1/4">
            Welcome to my portfolio
          </div>
        </div>
      </div>
    </div>

  );
}
