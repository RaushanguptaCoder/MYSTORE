import { Phone, MapPin, ShieldCheck, Clock, Heart } from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  return (
    <footer className="bg-white border-t border-neutral-200/80 mt-16 text-neutral-600 font-sans">

      {/* Trust Badges Bar */}
      <div className="border-b border-neutral-100 bg-neutral-50/50 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100/50">
              <Clock className="w-5 h-5 text-[#0c831f]" />
            </div>
            <h4 className="font-extrabold text-sm text-neutral-800 tracking-tight mt-1">Superfast Delivery</h4>
            <p className="text-[11px] text-neutral-400 font-semibold max-w-[200px]">Get your daily needs at your doorstep on same day delivery.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100/50">
              <ShieldCheck className="w-5 h-5 text-[#0c831f]" />
            </div>
            <h4 className="font-extrabold text-sm text-neutral-800 tracking-tight mt-1">100% Quality Assured</h4>
            <p className="text-[11px] text-neutral-400 font-semibold max-w-[200px]">Carefully selected whole spices, organic honey, and fresh products.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100/50">
              <Phone className="w-5 h-5 text-[#0c831f]" />
            </div>
            <h4 className="font-extrabold text-sm text-neutral-800 tracking-tight mt-1">Direct Store Support</h4>
            <p className="text-[11px] text-neutral-400 font-semibold max-w-[200px]">Directly connect with the owner on WhatsApp for any issues.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Col */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-neutral-900 leading-none">
              Rahul<span className="text-[#0c831f]"> General Store</span>
            </span>
            <span className="text-[8px] uppercase font-bold text-neutral-400 tracking-widest mt-1">
              Best Quality Products
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-medium leading-relaxed max-w-xs">
            Your trusted local grocery partner. Sourcing fresh Atta, Puja Items, authentic Jadi Bootis, snacks, and daily household essentials delivered to you in minutes.
          </p>
        </div>

        {/* Categories Col */}
        <div className="flex flex-col gap-3">
          <h4 className="font-black text-xs uppercase text-neutral-800 tracking-wider">Popular Categories</h4>
          <ul className="flex flex-col gap-2 text-xs font-semibold text-neutral-400">
            {[
              { name: "Atta, Rice & Dal", id: "atta-dal" },
              { name: "Daily Puja Essentials", id: "puja-essentials" },
              { name: "Jadi Bootis & Herbs", id: "jadi-bootis" },
              { name: "Snacks & Munchies", id: "snacks-munchies" },
              { name: "Tea, Coffee & Milk", id: "tea-coffee" }
            ].map((cat) => (
              <li
                key={cat.id}
                onClick={() => onCategoryClick && onCategoryClick(cat.id)}
                className="hover:text-[#0c831f] transition-colors cursor-pointer"
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Col */}
        <div className="flex flex-col gap-3">
          <h4 className="font-black text-xs uppercase text-neutral-800 tracking-wider">Contact & Support</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-semibold text-neutral-400">
            <li className="flex items-start gap-2 max-w-xs">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <span>Rahul General Store, Shyampur chowk, Menu Market, Murkatiya chowk,  Pincode 813203</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>+91 9631871702</span>
            </li>
          </ul>
        </div>

        {/* Store Timings Col */}
        <div className="flex flex-col gap-3">
          <h4 className="font-black text-xs uppercase text-neutral-800 tracking-wider">Store Timings</h4>
          <div className="bg-neutral-50/50 border border-neutral-200/40 rounded-2xl p-4 flex flex-col gap-1.5 max-w-xs">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
              <span>Mon — Sat:</span>
              <span className="text-neutral-800 font-extrabold">7:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
              <span>Sunday:</span>
              <span className="text-neutral-800 font-extrabold">8:00 AM - 8:00 PM</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-extrabold mt-1 text-center bg-emerald-50 py-1 rounded-lg">
              🟢 Accepting Instant Orders
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-100 py-6 px-4 text-center text-[11px] text-neutral-400 font-bold bg-neutral-50/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Rahul General Store. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> for Rahul General Store
          </span>
        </div>
      </div>

    </footer>
  );
}
