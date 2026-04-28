"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* GLOBAL NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase z-50">
            Parkview<span className="text-gray-500 font-light">Mall</span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/stores" className="text-gray-400 hover:text-white transition-colors">Stores</Link>
            <Link href="/map" className="text-gray-400 hover:text-white transition-colors">Floor Map</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/stores" className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
              Directory
            </Link>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl pt-28 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold tracking-wider uppercase">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/stores" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Stores</Link>
              <Link href="/map" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Floor Map</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
            
            <div className="mt-12">
              <Link 
                href="/stores" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-4 bg-white text-black rounded-full text-lg font-semibold uppercase tracking-widest"
              >
                Explore Directory
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}