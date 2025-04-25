import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="w-full bg-[#14213d]/20 text-white flex justify-between items-center p-2">
        <div className="left">
          {/* Show logo on mobile, text on desktop */}
          <div className="md:hidden">
            <img src="src\assets\6.png" alt="logo" className="h-10" />
          </div>
          <h1 className="text-2xl font-extrabold hidden md:block">PIXEL DEV STUDIO</h1>
        </div>
        
        <div className="center hidden md:block">
          <img src="src\assets\6.png" alt="logo" className="h-14"/>
        </div>

        {/* Desktop Menu */}
        <div className="right hidden md:block font-extrabold text-2xl">
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:text-gray-300">Work</li>
            <li className="cursor-pointer hover:text-gray-300">About</li>
            <li className="cursor-pointer hover:text-gray-300">Services</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <i className="ri-menu-line text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}></i>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#14213d]/20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex justify-end p-4">
            <i className="ri-close-line text-2xl cursor-pointer" onClick={() => setIsOpen(false)}></i>
          </div>
          <ul className="flex flex-col gap-4 p-4">
            <li className="cursor-pointer hover:text-gray-300">Work</li>
            <li className="cursor-pointer hover:text-gray-300">About</li>
            <li className="cursor-pointer hover:text-gray-300">Services</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar
