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
      <div className="md:hidden h-screen bg-center bg-cover" style={{ backgroundImage: "URL('/mobback.svg')" }}>
        <Navbar />
      </div>
    </div>

  );
}
