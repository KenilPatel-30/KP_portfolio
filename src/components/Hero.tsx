'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-primary"
            >
              Kenil Patel
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground max-w-2xl"
          >
            A curious designer turning ideas into
            thoughtful interfaces, simple, functional,
            and intentional.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
