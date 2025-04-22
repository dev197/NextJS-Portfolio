import React, { useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(100%)";
    };

    return (
        <div className='flex justify-center items-center space-x-10'>
            <nav className='hidden md:flex bg-white mt-12 px-10 py-3 hover:border-white transition-all duration-500 border-4 border-black rounded-full max-w-fit'>
                <ul className='flex text-black space-x-4'>
                    <li className='flex flex-row align-middle space-x-1 transition-all hover:text-black  hover:px-4 ease-in-out hover:text-lg'>
                        <Link href="/" className="flex align-middle space-x-1 transition-all duration-300 hover:px-4 ease-in-out hover:text-lg">Home
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                        </Link>
                    </li>
                    <li className='flex flex-row align-middle space-x-1 transition-all  hover:text-black  hover:px-4 ease-in-out hover:text-lg'>
                        <Link href="/about" className="flex align-middle space-x-1 transition-all duration-300 hover:px-4 ease-in-out hover:text-lg">About me
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                        </Link>
                    </li>
                    <li className='flex flex-row align-middle space-x-1 transition-all  hover:text-black  hover:px-4 ease-in-out hover:text-lg'>
                        <Link href="/projects" className="flex align-middle space-x-1 transition-all duration-300 hover:px-4 ease-in-out hover:text-lg">Projects
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
                        </Link>
                    </li>
                    <li className='flex flex-row align-middle space-x-1 transition-all  hover:text-black  hover:px-4 ease-in-out hover:text-lg'>
                        <Link href="/skills" className="flex align-middle space-x-1 transition-all duration-300 hover:px-4 ease-in-out hover:text-lg">Skills
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z" /></svg> 
                        </Link>
                    </li>
                    <li className='flex flex-row align-middle space-x-1 transition-all  hover:text-black  hover:px-4 ease-in-out hover:text-lg'>
                        <Link href="/contact" className="flex align-middle space-x-1 transition-all duration-300 hover:px-4 ease-in-out hover:text-lg">Contact
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className='flex px-2 mt-0 justify-between w-full items-center py-4 md:hidden'>
                <p className='flex font-mono text-white items-end'>
                    Dev Gupta
                </p>
                <button onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
                <ul ref={sideMenuRef} className='flex cursor-pointer flex-col gap-4 py-16 px-7 fixed -right-0 h-screen top-0 bottom-0 w-48 z-50 bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </div>
                    <li className='hover:text-lg'>
                        <Link href="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='hover:text-lg'>
                        <Link href="/about" onClick={closeMenu}>About me</Link>
                    </li>
                    <li className='hover:text-lg'>
                        <Link href="/projects" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='hover:text-lg'>
                        <Link href="/skills" onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='hover:text-lg'>
                        <Link href="/contact" onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
