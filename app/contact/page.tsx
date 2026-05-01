"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Capture the form element BEFORE the await pause
    const form = e.currentTarget; 
    
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Now we use the safely captured reference!
        
        setTimeout(() => setIsSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pb-24 pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Talk to us.We are here for you.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Whether you have a question about our stores, need assistance, or want to inquire about leasing, our concierge team is here to help.
          </motion.p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: INFO HUB */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400 leading-relaxed">
                  Parkview Mall<br />
                  2nd parklands avenue off limuru road<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <div className="space-y-1 text-gray-400">
                  <p className="flex justify-between w-48"><span>7:00AM - 10:00 PM</span></p>
                  <p className="flex justify-between w-48"><span>Times may differ for different stores</span></p>
                  
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">
                  +254 118 888 333<br />
                  philichcompany@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONCIERGE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-8">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium px-1">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                      placeholder="Abdirahman"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium px-1">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                      placeholder="Shafi"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium px-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium px-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors disabled:bg-white/20 disabled:text-white/50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    "Message Sent Successfully"
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}