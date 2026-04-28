"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { stores } from "@/data/stores";

export default function StoresPage() {
  const router = useRouter();
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Shopping", "Fashion", "Services", "Dining", "Entertainment"];

  // Advanced Filtering: Combines Category & Search Query
  const filtered = stores.filter((s) => {
    const matchesCategory = active === "All" || s.category === active;
    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 uppercase tracking-tighter">
          Parkview Mall Directory
        </h1>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search stores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
            />
          </div>
        </div>

        {/* STORES GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((store) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={store.id}
                onClick={() => {
                  // If a Google Business link exists, open it. 
                  // Otherwise, fall back to the local store page.
                  if (store.googleMaps) {
                    window.open(store.googleMaps, "_blank", "noopener,noreferrer");
                  } else {
                    router.push(`/stores/${store.slug}`);
                  }
                }}
                className="group cursor-pointer flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
              >
                {/* Next.js Optimized Image */}
                <div className="h-48 w-full relative overflow-hidden bg-white/5">
                  <Image
                    src={store.image || "/images/placeholder.jpg"}
                    alt={store.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* External Indicator Tag */}
                  {store.googleMaps && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      View on Maps
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold tracking-wide text-white group-hover:text-gray-200 transition-colors">
                      {store.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {store.desc}
                  </p>
                </div>
                
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State Fallback */}
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full text-center py-12 text-gray-500"
            >
              No stores found matching your search.
            </motion.div>
          )}
        </motion.div>

      </div>
    </main>
  );
}