 "use client"
import Image from "next/image";
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
      <div className="relative  min-h-full md:min-h-screen w-full bg-black overflow-hidden">      
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tighter">
            QuantIQ<span className="text-blue-500">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button className="flex items-center text-white/90 hover:text-white transition-opacity group">
              {/* Features <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> */}
            </button>
            <a href="#" className="text-white/90 hover:text-white transition-opacity">Company</a>
            <a href="#" className="text-white/90 hover:text-white transition-opacity">Blogs</a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-white font-medium hover:opacity-80 transition-opacity">Sign in</a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

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
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10">
            Start Building Wealth
          </button>
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
      <section className="py-32 px-6">
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
      <section className="py-32 border-t border-white/5">
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

      {/* 8. FOOTER */}
      <footer className="py-20 border-t border-white/5 px-6">
        {/* <video autoplay="" loop="" playsinline="" class="absolute inset-0 w-full h-full object-cover" src="blob:https://lgpsm.lovable.app/eceef478-f127-47f5-ad71-78a80360bc61"></video> */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <div className="text-2xl font-bold tracking-tighter mb-6">QuantIQ.</div>
              <p className="text-zinc-500 text-sm max-w-xs mb-8">Building the next generation of financial intelligence for families and individuals worldwide.</p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white" />
                <Linkedin className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white" />
                <Instagram className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-white cursor-pointer transition-colors">Wealth Tracking</li>
                <li className="hover:text-white cursor-pointer transition-colors">Investment AI</li>
                <li className="hover:text-white cursor-pointer transition-colors">Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Newsroom</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-white cursor-pointer transition-colors">Advisors</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 border-t border-white/5 pt-12">
            <p>© 2026 QuantIQ Financial Technologies Inc.</p>
            <p className="mt-4 md:mt-0 flex items-center"><Globe className="w-3 h-3 mr-1" /> Global English (USD)</p>
          </div>
        </div>
      </footer>
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

const features = [
  {
    title: "Precision Engine",
    subtitle: "Reality-Based Modeling",
    description: "Our engine accounts for the fine details: capital gains tax, annual savings step-ups, and the specific transition year where income ends.",
    highlight: "Net-of-tax ROI logic for 100% accuracy.",
    icon: <Target className="w-8 h-8 text-blue-500" />,
    gradient: "from-blue-50 to-indigo-50",
    accent: "bg-blue-500"
  },
  {
    title: "Visual Analytics",
    subtitle: "Dynamic Wealth Projections",
    description: "Instantly visualize your financial 'mountain.' Watch your corpus trajectory update in real-time with interactive area charts.",
    highlight: "Instant feedback as you tweak assumptions.",
    icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
    gradient: "from-purple-50 to-fuchsia-50",
    accent: "bg-purple-500"
  },
  {
    title: "Lifestyle Planning",
    subtitle: "Personalized Life Roadmap",
    description: "Tailor your simulation to your unique career path. Adjust inflation rates and model life expectancy to ensure your money never runs out.",
    highlight: "Built-in 'Sustainability Alert' logic.",
    icon: <Palmtree className="w-8 h-8 text-orange-500" />,
    gradient: "from-orange-50 to-amber-50",
    accent: "bg-orange-500"
  }
];

const FeatureCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 z-0"><video autoPlay={true} loop playsInline className="w-full h-full object-cover" style={{transform: "scale(1)"}} src="blob:https://lgpsm.lovable.app/22142afd-c178-46d3-8fcf-9158c2357f95"></video><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div></div>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-semibold tracking-tight text-sm uppercase"
        >
          The Simulation Advantage
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mt-2 tracking-tight"
        >
          Master your independence.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 mt-4 max-w-2xl"
        >
          Take the guesswork out of retirement with a simulation engine built for real-world complexity.
        </motion.p>
      </div>

      {/* Carousel Track */}
      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -400 }} // Adjust based on screen width
          className="flex gap-8 px-6 md:px-[calc((100vw-1280px)/2+24px)]"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative min-w-[85vw] md:min-w-[450px] h-[500px] md:h-[550px] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden`}
            >
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-100 origin-center-left object-left-top opacity-75"
                  style={{filter: "saturate(0)"}}
                >
                  <source 
                    src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/manifest/video.m3u8" 
                    type="video/mp4" 
                  />
                </video>
                {/* Gradient Overlay for Readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" /> */}
              </div>
              <div className="z-10">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-white font-medium text-lg uppercase tracking-wider">
                  {feature.subtitle}
                </h3>
                <h4 className="text-3xl font-bold text-white mt-2 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-slate-300 mt-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-full ${feature.accent}`} />
                  <span className="text-sm text-slate-200 font-bold uppercase tracking-tighter">
                    {feature.highlight}
                  </span>
                </div>
                <button className="flex items-center gap-2 font-semibold text-slate-400 group">
                  Learn how it works 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Spacer for scroll-end */}
          <div className="min-w-[100px] h-full invisible" />
        </motion.div>
      </div>

      {/* Progress Dots / Instruction */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center gap-4 text-white">
        <div className="h-[2px] w-24 bg-slate-100 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-slate-400 w-1/3"
            animate={{ x: [0, 64, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest">Swipe to explore</span>
      </div>
    </section>
  );
};
