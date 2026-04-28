"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { stores } from "@/data/stores"; // Adjust path if needed: e.g., "../../data/stores"
import { MapPin, Navigation } from "lucide-react";

export default function FloorMapPage() {
  const router = useRouter();
  
  // The floors available in Parkview Mall based on your data
  const floors = [
    "Ground Floor", 
    "1st Floor", 
    "2nd Floor", 
    "3rd Floor", 
    "4th Floor", 
    "5th Floor", 
    "Rooftop"
  ];

  const [activeFloor, setActiveFloor] = useState("Ground Floor");

  // Filter stores based on whether their location string includes the active floor name
  const storesOnFloor = stores.filter((store) => 
    store.location?.toLowerCase().includes(activeFloor.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 flex items-center justify-center gap-2">
            <Navigation className="w-4 h-4" /> Wayfinding
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">
            Floor Map
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Navigate Parkview Mall with ease. Select a floor below to see exactly what is located on that level.
          </p>
        </div>

        {/* FLOOR SELECTOR BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {floors.map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFloor === floor
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {floor}
            </button>
          ))}
        </div>

        {/* STORES LIST FOR ACTIVE FLOOR */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 min-h-[400px]">
          <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
            <h3 className="text-2xl font-bold">{activeFloor} Directory</h3>
            <span className="text-gray-500 text-sm">{storesOnFloor.length} locations found</span>
          </div>

          <motion.div layout className="space-y-4">
            <AnimatePresence mode="popLayout">
              {storesOnFloor.length > 0 ? (
                storesOnFloor.map((store) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={store.id}
                    onClick={() => router.push(`/stores/${store.slug}`)}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-black shrink-0 border border-white/10">
                        <img src={store.image} alt={store.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold tracking-wide">{store.name}</h4>
                        <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 block">{store.category}</span>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 md:text-right">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{store.location}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-20 text-gray-500"
                >
                  No stores or services found on this floor yet.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </main>
  );
}