"use client";

import { 
  ArrowRight,
  Target, BarChart3, Palmtree
} from 'lucide-react';
import { motion } from 'framer-motion';

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

      <div className="absolute inset-0 z-0">
        <video autoPlay={true} loop playsInline className="w-full h-full object-cover" style={{transform: "scale(1)"}} src="blob:https://lgpsm.lovable.app/22142afd-c178-46d3-8fcf-9158c2357f95"></video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
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
                  className="w-full h-full object-cover scale-100 origin-bottom-center object-left-top opacity-75"
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

export default FeatureCarousel;