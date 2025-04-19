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

  const buildingY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const buildingScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const buildingOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);
  
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: buildingY,
          scale: buildingScale,
          opacity: buildingOpacity
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        />
        <div 
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{
            y: contentY,
            opacity: contentOpacity
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Home Away <br />
              From Home
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience comfortable living with modern amenities and a supportive community designed for your academic success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild
              size="lg" 
              className="text-lg px-8 bg-primary hover:bg-primary/90"
            >
              <Link to="/rooms">
                Explore Rooms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-slate-900"
            >
              <Link to="/contact">
                Book a Visit
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 opacity-80" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
      </div>
    </div>
  );
}