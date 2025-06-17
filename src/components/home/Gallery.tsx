import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryPhoto {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const galleryPhotos: GalleryPhoto[] = [
    {
      id: 1,
      url: './public/images/messimg3.jpg',
      alt: "Spacious Mess Area",
      category: "Dining"
    },
    {
      id: 2,
      url: './public/images/roomimg5.jpg',
      alt: "Double Occupancy Room",
      category: "Rooms"
    },
    {
      id: 3,
      url: './public/images/roomimg3.jpg',
      alt: "Triple Occupancy Room",
      category: "Rooms"
    },
    {
      id: 4,
      url: './public/images/liftimg1.jpg',
      alt: "Modern Lift Facility",
      category: "Facilities"
    },
    {
      id: 5,
      url: './public/images/messimg2.jpg',
      alt: "Dining Experience",
      category: "Dining"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Photo Gallery</h2>
            </div>
            <p className="text-slate-600 text-lg">
              Take a visual tour of our hostel facilities, rooms, and community spaces.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] mb-12"
        >
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : 
                index % 3 === 2 ? 'lg:col-span-1 lg:row-span-2' : 
                'col-span-1'
              }`}
            >
              <div className="relative group h-full">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{photo.alt}</h3>
                      <span className="text-xs text-primary font-medium">{photo.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/photos">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}