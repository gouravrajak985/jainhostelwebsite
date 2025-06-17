import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { XIcon } from 'lucide-react';

interface Photo {
  id: number;
  category: string;
  url: string;
  alt: string;
  description: string;
}

export function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  // Photo gallery data
  const photos: Photo[] = [
    // Exterior Category
    {
      id: 1,
      category: "exterior",
      url: "/images/banner.jpg",
      alt: "Hostel Building Front View",
      description: "Front view of our hostel building with modern architecture and well-maintained surroundings."
    },

    // Rooms Category
    {
      id: 2,
      category: "rooms",
      url: "/images/roomimg1.jpg",
      alt: "Double Room",
      description: "Standard double room with comfortable beds, study desk, and storage space."
    },
    {
      id: 3,
      category: "rooms",
      url: "/images/roomimg5.jpg",
      alt: "Double Room",
      description: "Shared room for two residents with individual study spaces."
    },
    {
      id: 4,
      category: "rooms",
      url: "/images/roomimg6.jpg",
      alt: "Double Room",
      description: "Shared room for two residents with individual study spaces."
    },
    {
      id: 5,
      category: "rooms",
      url: "/images/roomimg3.jpg",
      alt: "Triple Room",
      description: "Bedroom area in our executive suite with premium furnishings."
    },
    {
      id: 6,
      category: "rooms",
      url: "/images/tripleroom1.jpg",
      alt: "Triple Room",
      description: "Bedroom area in our executive suite with premium furnishings."
    },

    // Facilities Category
    {
      id: 7,
      category: "facilities",
      url: "/images/liftimg1.jpg",
      alt: "Lift Facility",
      description: "Modern lift facility providing easy access to all floors."
    },
     {
      id: 7,
      category: "facilities",
      url: "/images/liftimg1.jpg",
      alt: "Lift Facility",
      description: "Modern lift facility providing easy access to all floors."
    },
    
    // Kitchen Category
    {
      id: 8,
      category: "kitchen",
      url: "/images/messimg1.jpg",
      alt: "Kitchen Area",
      description: "Spacious kitchen area with modern appliances for residents to eat and prepare meals."
    }, 
    {
      id: 9,
      category: "kitchen",
      url: "/images/messimg2.jpg",
      alt: "Kitchen Area",
      description: "Spacious kitchen area with modern appliances for residents to eat and prepare meals."
    },
       {
      id: 10,
      category: "kitchen",
      url: "/images/messimg3.jpg",
      alt: "Kitchen Area",
      description: "Spacious kitchen area with modern appliances for residents to eat and prepare meals."
    },

    // facilities Category
     {
      id: 7,
      category: "facilities",
      url: "/images/dustbin1.jpg",
      alt: "Dustbin Facility",
      description: "Proper waste management with strategically placed dustbins throughout the hostel."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-slate-300">
              Explore our hostel through images - from rooms to facilities and events.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="exterior">Exterior</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {photos.map((photo) => (
                  <GalleryItem
                    key={photo.id}
                    photo={photo}
                    onClick={() => setSelectedPhoto(photo)}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            </TabsContent>

            {["exterior", "rooms", "facilities", "events"].map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {photos
                    .filter((photo) => photo.category === category)
                    .map((photo) => (
                      <GalleryItem
                        key={photo.id}
                        photo={photo}
                        onClick={() => setSelectedPhoto(photo)}
                        variants={itemVariants}
                      />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Virtual Tour</h2>
            <p className="text-slate-600 mb-8">
              Experience a 360° virtual tour of our hostel facilities without leaving your home.
            </p>
            <Button size="lg">
              Start Virtual Tour
            </Button>
          </div>

          <div className="aspect-video max-w-4xl mx-auto bg-slate-200 rounded-lg overflow-hidden mt-8 flex items-center justify-center">
            <p className="text-slate-500">360° Virtual Tour Experience</p>
            {/* This would typically be replaced with an actual 360 virtual tour embed */}
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-5xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 z-10 text-white bg-black bg-opacity-50 rounded-full -translate-y-full"
              onClick={() => setSelectedPhoto(null)}
            >
              <XIcon className="h-6 w-6" />
            </Button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.alt}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{selectedPhoto.alt}</h3>
                <p className="text-slate-600">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface GalleryItemProps {
  photo: Photo;
  onClick: () => void;
  variants: any;
}

function GalleryItem({ photo, onClick, variants }: GalleryItemProps) {
  return (
    <motion.div
      variants={variants}
      className="cursor-pointer group relative overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <AspectRatio ratio={1 / 1}>
        <img
          src={photo.url}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </AspectRatio>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
        <div className="p-3 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-medium text-sm truncate">{photo.alt}</h3>
        </div>
      </div>
    </motion.div>
  );
}