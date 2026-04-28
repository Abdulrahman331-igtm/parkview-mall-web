"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShoppingBag, CalendarDays, UtensilsCrossed, Building } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white relative z-0">

      {/* 1. HERO SECTION (Like the "Step Into Adventure" banner) */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fashion.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold leading-tight tracking-tight uppercase"
          >
            Welcome to <br /> PARKVIEW mall
          </motion.h1>
        </div>
      </section>

      {/* 2. THE INTRO BANNER (Like the red "Let The Adventure Begin..." block) */}
      <section className="bg-gradient-to-r from-red-900/40 via-black to-red-900/40 py-16 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Curated. Refined. Exclusive.</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let The Experience Begin...</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Parkview Mall is your unique experience unlike any other in Nairobi. If you love shopping, dining, 
            entertainment, and fun with family and friends, Parkview Mall is for you. For the entire family to enjoy.
          </p>
        </div>
      </section>

      {/* 3. THE 4 CIRCULAR CATEGORIES (Now with Floating Animation!) */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          
          {/* Shopping - Floats up and down over 4 seconds */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => router.push("/stores")}>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500 transition-colors duration-300 mb-4"
            >
              <ShoppingBag className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-medium tracking-wide">Shopping</h3>
            <span className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>

          {/* Events - Floats slightly faster (3.5s) so they don't look robotic */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => router.push("/gallery")}>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500 transition-colors duration-300 mb-4"
            >
              <CalendarDays className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-medium tracking-wide">Events</h3>
            <span className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>

          {/* Dining - Floats over 4.5s */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => router.push("/stores")}>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-colors duration-300 mb-4"
            >
              <UtensilsCrossed className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-medium tracking-wide">Dining</h3>
            <span className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>

          {/* Living - Floats over 3.8s */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => router.push("/contact")}>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:border-yellow-500 transition-colors duration-300 mb-4"
            >
              <Building className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-medium tracking-wide">Living</h3>
            <span className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>

        </div>
      </section>

      {/* 4. ABOUT US / DISCOVER SECTION (Images now float too!) */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Discover The Best <br/> Shopping Experience <br/> At Parkview Mall</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Kids & Family */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold">For Kids & Family</h4>
              <p className="text-gray-400 leading-relaxed">
                It's always a fun time for the whole family at Parkview Mall, your complete shopping, dining, and entertainment destination. Delight in top-notch entertainment facilities and a safe environment for everyone.
              </p>
              {/* Floating Image Container */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-64 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300')] bg-cover bg-center opacity-60"></div>
              </motion.div>
            </div>

            {/* Corporates */}
            <div className="space-y-6">
              {/* Floating Image Container (moves opposite direction) */}
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-64 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-60"></div>
              </motion.div>
              <h4 className="text-2xl font-semibold">For Corporates</h4>
              <p className="text-gray-400 leading-relaxed">
                Delight in top-notch conferencing facilities designed to modern standards and equipped with state-of-the-art equipment, perfect for your next corporate event or business lunch.
              </p>
              <button onClick={() => router.push("/contact")} className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-sm uppercase tracking-wider">
                Learn More →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH PROMO BANNER (Like "Step Into Style") */}
      <section className="relative h-[60vh] flex items-center justify-end px-6 overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-xl mr-auto md:ml-24">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Step <br/> Into <br/> Style
          </h2>
        </div>
      </section>

      {/* 6. COME EXPLORE CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Deals And Events</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Come Explore...</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Parkview is home to unique shopping, dining, entertainment, and events. From exclusive in-store experiences, 
            the latest fashions to discover and share, Parkview is your one-stop-shop for all that's new and exciting.
          </p>
          <button onClick={() => router.push("/stores")} className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition uppercase tracking-widest text-sm">
            Stores Directory
          </button>
        </div>
      </section>

    </main>
  );
}