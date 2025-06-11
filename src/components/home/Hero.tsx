import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Only apply parallax to background elements, not the main content
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Spacer for navbar */}
      <div className="absolute top-0 left-0 right-0 h-24" />

      {/* Content */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content - No scroll effects applied */}
          <div className="text-left lg:pl-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight">
                Your Home Away <br />
                From Home
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 lg:mb-10 max-w-2xl">
                Experience comfortable living with modern amenities and a supportive community designed for your academic success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            >
              <Button 
                asChild
                size="lg" 
                className="text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-6 bg-primary hover:bg-primary/90"
              >
                <Link to="/rooms">
                  Explore Rooms
                  <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-6 text-slate-900 border-slate-200 hover:bg-slate-100"
              >
                <Link to="/contact">
                  Book a Visit
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Background elements with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2 lg:pr-8 mt-24 lg:mt-0"
            style={{ y: backgroundY }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-6 hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Hostel Building" 
                className="w-full h-64 md:h-80 lg:h-[600px] object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}