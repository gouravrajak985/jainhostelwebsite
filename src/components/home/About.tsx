import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Welcome to Boy's Hostel</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Our hostel provides a comfortable home away from home for students and working professionals. 
              Located in the heart of the city, we offer convenient access to educational institutions, 
              workplaces, and recreational facilities.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              With modern amenities, spacious rooms, and a supportive community, we ensure that your stay 
              is both productive and enjoyable. Our dedicated staff is committed to maintaining a safe, 
              clean, and welcoming environment for all residents.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Whether you're staying for a semester, a year, or longer, our hostel provides the perfect 
              balance of privacy and community, allowing you to focus on your studies or work while 
              building lasting friendships.
            </p>
            <Button asChild className="mt-4">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 lg:mt-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Hostel Common Area" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-lg font-medium">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-24">
          <Separator className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 bg-slate-50 rounded-lg"
            >
              <div className="text-primary text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-800 text-lg font-medium">Happy Residents</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 bg-slate-50 rounded-lg"
            >
              <div className="text-primary text-4xl font-bold mb-2">100+</div>
              <div className="text-slate-800 text-lg font-medium">Rooms Available</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 bg-slate-50 rounded-lg"
            >
              <div className="text-primary text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-800 text-lg font-medium">Security & Support</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 bg-slate-50 rounded-lg"
            >
              <div className="text-primary text-4xl font-bold mb-2">10+</div>
              <div className="text-slate-800 text-lg font-medium">Premium Amenities</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}