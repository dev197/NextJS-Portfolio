import React, { useState } from 'react';
import Link from 'next/link';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handlers for opening/closing the menu
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="flex justify-between w-screen items-center px-4 py-4 ">
        <p className="font-mono text-xl px-4 text-white">Dev Gupta</p>
        <button className='px-4 ' onClick={openMenu} aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#ffffff"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </nav>

      {/* Curvey Opening Menu Overlay */}
      <div
        className="fixed top-0 right-0 h-screen w-screen z-50 bg-rose-50 "
        style={{
          // When closed, show a small circle; when open, expand the circle to cover the screen
          clipPath: isOpen ? 'circle(150% at top right)' : 'circle(30px at top right)',
          transition: 'clip-path 0.7s ease-in-out',
        }}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-center text-xl h-full gap-8">
          <li className="hover:text-lg hover:text-[#fca5a5] ease-out hover:underline" onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-lg hover:text-[#fca5a5] ease-out hover:underline" onClick={closeMenu}>
            <Link href="/about">About me</Link>
          </li>
          <li className="hover:text-lg hover:text-[#fca5a5] ease-out hover:underline" onClick={closeMenu}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-lg hover:text-[#fca5a5] ease-out hover:underline" onClick={closeMenu}>
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:text-lg hover:text-[#fca5a5] ease-out hover:underline" onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
