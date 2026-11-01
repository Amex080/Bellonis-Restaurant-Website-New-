import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent(
    'Hello Bellonis Place! I am messaging from EKSU campus and would like to place an inquiry / order.'
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2 font-sans">
            EKSU Campus Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Visit our kitchen or reach out directly.
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Conveniently situated at the Faculty of Engineering for quick between-class dining and express hostel delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location & Contact Information */}
          <div className="lg:col-span-5 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-stone-200/80 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 font-display pb-3 border-b border-stone-200/60">
              Kitchen & Ordering Information
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Address</p>
                <p className="font-bold text-stone-900 mt-0.5">{RESTAURANT_INFO.shortAddress}</p>
                <p className="text-stone-600 mt-0.5">Ekiti State University, Ado-Ekiti</p>
                <div className="flex items-center gap-1.5 text-[#e75a43] font-semibold text-xs mt-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Ground floor, adjacent to the lecture halls</span>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Direct Order Line</p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-bold text-stone-900 hover:text-[#e75a43] transition-colors font-mono mt-0.5 block text-base"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-stone-800 border border-stone-300 rounded-lg text-xs font-semibold hover:bg-stone-50 transition-colors"
                  >
                    <Phone className="w-3 h-3" /> Voice Call
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp Order
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Email</p>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="font-medium text-stone-800 hover:text-[#e75a43] transition-colors mt-0.5 block"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 pt-3 border-t border-stone-200/60">
              <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Service Hours</p>
                <p className="text-stone-800 font-medium mt-0.5">Monday – Saturday: 8:00 AM – 9:00 PM</p>
                <p className="text-stone-600 mt-0.5">Sunday: 10:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Inquiry / Feedback Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-stone-200/80">
            <h3 className="text-xl font-bold text-stone-900 font-display mb-1">
              Send an Inquiry or Pre-Order
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 font-sans">
              Planning a student association meeting, department lunch, or special meal request? Let us know below.
            </p>

            {formSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-8 text-center text-stone-800 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base font-display">Message Received</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you for reaching out to Bellonis Place. A team member will respond to your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Babatunde Segun"
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#e75a43] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 08070692488"
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#e75a43] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#e75a43] focus:border-transparent transition-all"
                  >
                    <option value="General Inquiry">General Campus Inquiry</option>
                    <option value="Department Lunch Catering">Department Lunch / Event Catering</option>
                    <option value="Hostel Bulk Order">Hostel Bulk Order Delivery</option>
                    <option value="Feedback">Feedback / Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Message Notes *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify number of packs, time, or your questions..."
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#e75a43] focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-[#e75a43] text-white font-semibold py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
