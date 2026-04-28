"use client";

import Link from "next/link";
// Using universal icons to bypass the "Export not found" errors
import { Camera, MessageSquare, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* BRAND COLUMN */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter uppercase">
            Parkview<span className="text-gray-500 font-light">Mall</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nairobi's premier destination for luxury shopping, fine dining, and world-class entertainment.
          </p>
          <div className="flex gap-4">
            {/* Camera icon used for Instagram */}
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
              <Camera className="w-4 h-4" />
            </Link>
            {/* Message icon used for X/Social */}
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
              <MessageSquare className="w-4 h-4" />
            </Link>
            {/* Globe icon for Website */}
            <Link href="/" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
              <Globe className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* DIRECTORY LINKS */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">Directory</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/stores" className="hover:text-white transition-colors">All Stores</Link></li>
            <li><Link href="/stores" className="hover:text-white transition-colors">Shopping</Link></li>
            <li><Link href="/stores" className="hover:text-white transition-colors">Dining</Link></li>
            <li><Link href="/stores" className="hover:text-white transition-colors">Services</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">Explore</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Parkview</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">Visit Us</h3>
          <ul className="space-y-5 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/40" />
              <span>2nd parklands avenue, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-white/40" />
              <span>+254 118 888 333</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-white/40" />
              <span>philichcompany@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600">
        <p>© 2026 Parkview Mall. All rights reserved.</p>
        <p className="hover:text-gray-400 transition-colors cursor-default">Designed for Excellence</p>
      </div>
    </footer>
  );
}