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
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Hostel Building Exterior",
      category: "Exterior"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Comfortable Single Room",
      category: "Rooms"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Modern Kitchen Facility",
      category: "Kitchen"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Study Room",
      category: "Study Area"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Fitness Center",
      category: "Gym"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Common Lounge Area",
      category: "Lounge"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Double Room",
      category: "Rooms"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      alt: "Recreation Room",
      category: "Recreation"
    }
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : 
                index === 3 ? 'col-span-2' : 
                ''
              }`}
            >
              <div className={`relative ${
                index === 0 ? 'h-80 md:h-96' : 
                index === 3 ? 'h-48 md:h-56' : 
                'h-48'
              }`}>
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
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