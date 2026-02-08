import Image from "next/image";
import Link from 'next/link'

import { 
  ChevronDown, 
  Shield, 
  TrendingUp, 
  Zap, 
  PieChart, 
  ArrowRight, 
  Globe, 
  Lock,
  Twitter,
  Linkedin,
  Instagram,
  Target, BarChart3, Palmtree
} from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCarousel from "./components/FeatureCarousel";


const steps = [
    {
      title: "Create Your Free Account",
      description: "Sign up in seconds using your email address or mobile number."
    },
    {
      title: "Fill Your Data",
      description: "Securely upload your data, like, your age, income, expenses, and assets."
    },
    {
      title: "Set Your Financial Goals",
      description: "Customize your savings, spending, or investment goals with easy tools."
    },
    {
      title: "Track, Grow, and Optimize",
      description: "Watch your money work for you in real time—get insights and tips."
    }
  ];

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Background Video */}
      <div className="relative  min-h-full md:min-h-[1000px] w-full bg-black overflow-hidden">      

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 md:pb-64">
          {/* Glassmorphic Tag */}
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
            Real-Time Budget Tracking
          </div>

          {/* Headline */}
          <h1 className="text-gray-300 text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[1.1] font-bold tracking-tight max-w-5xl mb-6">
            Combines quantitative analysis <br className="hidden md:block" /> with <span className="italic text-white">Intelligence.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Transform today's earnings into tomorrow's family fortune with proven 
            wealth-building strategies and real-time intelligence.
          </p>

          {/* CTA Button */}
          <Link href="/fire-calculator" className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10">
            Start Building Wealth
          </Link>
        </main>

        <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100 origin-center-left object-left-top opacity-75"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260207_050933_33e2620d-09cd-43a2-80ef-4cdbb42f4194.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>
      </div>



      {/* Bottom Features Grid */}
      <div className="arelative md:absolute md:bottom-12 left-0 w-full px-4 md:px-6 z-20 mb-12 md:mb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl">
          {steps.map((step, index) => (
            <div key={index} className="p-4 border-b md:border-b-0 md:border-r border-white/5 last:border-0">
              <div className="text-white/40 text-xs font-bold mb-2 uppercase tracking-widest">
                Step 0{index + 1}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. LOGO MARQUEE / TRUSTED BY */}
      {/* <section className="py-24 border-y border-white/5 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-zinc-500 text-sm font-medium mb-12 uppercase tracking-widest">Powering wealth for forward-thinking families</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale invert">
            <div className="text-2xl">FORBES</div>
            <div className="text-2xl">BLOOMBERG</div>
            <div className="text-2xl">REUTERS</div>
            <div className="text-2xl">TECHCRUNCH</div>
            <div className="text-2xl">NASDAQ</div>
          </div>
        </div>
      </section> */}

      {/* 3. CORE FEATURES (GRID) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FeatureCarousel />
        </div>
      </section>

      {/* 4. STATISTICS SECTION */}
      {/* <section className="py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-7xl md:text-8xl font-black tracking-tighter mb-2">$12B+</div>
            <p className="font-bold uppercase text-sm tracking-widest text-zinc-500">Assets Managed</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-black tracking-tighter mb-2">99.9%</div>
            <p className="font-bold uppercase text-sm tracking-widest text-zinc-500">Uptime Reliability</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-black tracking-tighter mb-2">45k+</div>
            <p className="font-bold uppercase text-sm tracking-widest text-zinc-500">Active Portfolios</p>
          </div>
        </div>
      </section> */}


      {/* 6. TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">Trusted by the world's most <br/>discerning families.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              quote="QuantIQ completely changed how we view our family office. The real-time insights are indispensable for our long-term planning."
              author="Marcus Sterling"
              role="Principal, Sterling Holdings"
            />
            <Testimonial 
              quote="The most intuitive financial interface I've used. It strips away the noise and shows you exactly what matters for growth."
              author="Elena Rodriguez"
              role="Tech Entrepreneur"
            />
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100 origin-center-left object-left-top opacity-75"
        >
          <source 
            src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/manifest/video.m3u8" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Ready to secure your legacy?</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-xl mx-auto">Schedule a one-on-one consultation with our experts.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all">Create Free Account</button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">Contact Us</button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none" />
      </section>
    </div>
  );
}

const Testimonial = ({ quote, author, role }: any) => (
  <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/5">
    <p className="text-xl md:text-2xl font-medium mb-8 leading-snug">"{quote}"</p>
    <div>
      <div className="font-bold">{author}</div>
      <div className="text-zinc-500 text-sm">{role}</div>
    </div>
  </div>
);

