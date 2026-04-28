"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { stores } from "../../../data/stores"; // Adjust the path to your data file
import { ArrowLeft } from "lucide-react"; // Make sure to install lucide-react if you haven't!

export default function StoreDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // Find the specific store based on the URL slug
  const store = stores.find((s) => s.slug === params.slug);

  // Fallback if the store doesn't exist
  if (!store) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Store Not Found</h1>
        <button onClick={() => router.push("/stores")} className="text-gray-400 hover:text-white transition">
          ← Back to Directory
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* STORE HERO BANNER */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Dynamic Store Cover Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${store.image || '/images/placeholder.jpg'})` }}
        />
        {/* Dark overlay so the text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto z-10">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition mb-6 uppercase tracking-widest text-sm font-semibold"
          >
             <span>← Back</span>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-4 inline-block backdrop-blur-sm">
              {store.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              {store.name}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* STORE DETAILS SECTION */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-4">About the Store</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {store.desc} 
            {/* Adding some dummy filler text for the premium layout feel until you have real data */}
            <br /><br />
            Experience the finest selection of products and services tailored just for you. Located conveniently within Parkview Mall, {store.name} offers unparalleled quality and customer service.
          </p>
        </motion.div>

        {/* Right Column: Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-6">Store Info</h3>
          
          <div className="space-y-4 text-gray-400 text-sm">
            <div>
              <strong className="block text-white mb-1">Location</strong>
              {/* Dynamic Location from data/stores.ts */}
              <p>{store.location || "Location not specified"}</p>
            </div>
            <div>
              <strong className="block text-white mb-1">Opening Hours</strong>
              {/* Dynamic Hours from data/stores.ts */}
              <p>{store.hours || "Hours not specified"}</p>
            </div>
            <div>
              <strong className="block text-white mb-1">Contact</strong>
              {/* Dynamic Phone from data/stores.ts */}
              <p>{store.phone || "Contact not specified"}</p>
            </div>
          </div>

          {/* Click-to-call button */}
          <a 
            href={`tel:${store.phone}`}
            className="block w-full mt-8 px-6 py-3 bg-white text-black text-center font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Contact Store
          </a>
        </motion.div>

      </div>
    </main>
  );
}