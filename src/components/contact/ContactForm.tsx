"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-24 bg-brand-off-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-8">
              Let&apos;s start a conversation.
            </h2>
            <p className="text-brand-charcoal/70 mb-12 text-lg">
              We&apos;re passionate about bringing the purest ingredients from Meghalaya to the world. We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-lg">Email Us</h4>
                  <a href="mailto:hello@amrootorganics.com" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">
                    hello@amrootorganics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-lg">Our Origin</h4>
                  <p className="text-brand-charcoal/70">
                    Lakadong, West Jaintia Hills<br />
                    Meghalaya, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-black/5">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-brand-charcoal">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="px-4 py-3 rounded-xl border border-black/10 bg-brand-off-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-brand-charcoal"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-brand-charcoal">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="px-4 py-3 rounded-xl border border-black/10 bg-brand-off-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-brand-charcoal"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="px-4 py-3 rounded-xl border border-black/10 bg-brand-off-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-brand-charcoal"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brand-charcoal">Subject</label>
                  <select 
                    id="subject" 
                    className="px-4 py-3 rounded-xl border border-black/10 bg-brand-off-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-brand-charcoal appearance-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="samples">Request Samples</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-charcoal">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="px-4 py-3 rounded-xl border border-black/10 bg-brand-off-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-brand-charcoal resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full bg-brand-green text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#023A33] transition-colors group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
