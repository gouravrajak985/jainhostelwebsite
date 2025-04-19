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
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Hostel Building Front View",
      description: "Front view of our hostel building with modern architecture and well-maintained surroundings."
    },
    {
      id: 2,
      category: "exterior",
      url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Hostel Entrance",
      description: "Welcoming entrance to our hostel with secure access control system."
    },
    {
      id: 3,
      category: "exterior",
      url: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Outdoor Recreational Area",
      description: "Spacious outdoor area for residents to relax and socialize."
    },
    {
      id: 4,
      category: "exterior",
      url: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Hostel Side View",
      description: "Side view of the hostel showing the architectural details and design elements."
    },
    {
      id: 5,
      category: "exterior",
      url: "https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Hostel Gardens",
      description: "Beautiful gardens surrounding the hostel with seating areas for relaxation."
    },
    
    // Rooms Category
    {
      id: 6,
      category: "rooms",
      url: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Single Room",
      description: "Standard single room with comfortable bed, study desk, and storage space."
    },
    {
      id: 7,
      category: "rooms",
      url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Double Room",
      description: "Shared room for two residents with individual study spaces."
    },
    {
      id: 8,
      category: "rooms",
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Premium Suite",
      description: "Luxurious premium suite with enhanced amenities and extra space."
    },
    {
      id: 9,
      category: "rooms",
      url: "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Executive Suite Bedroom",
      description: "Bedroom area in our executive suite with premium furnishings."
    },
    {
      id: 10,
      category: "rooms",
      url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Room Interior",
      description: "Interior view of a standard room showing the layout and furnishings."
    },
    
    // Facilities Category
    {
      id: 11,
      category: "facilities",
      url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Modern Kitchen",
      description: "Fully equipped communal kitchen with modern appliances."
    },
    {
      id: 12,
      category: "facilities",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Study Room",
      description: "Quiet study area with comfortable seating and good lighting."
    },
    {
      id: 13,
      category: "facilities",
      url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Gym Facility",
      description: "Modern fitness center with cardio and weight training equipment."
    },
    {
      id: 14,
      category: "facilities",
      url: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Recreation Room",
      description: "Entertainment area with games and comfortable seating."
    },
    {
      id: 15,
      category: "facilities",
      url: "https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Common Lounge",
      description: "Comfortable lounge area for socializing and relaxation."
    },
    {
      id: 16,
      category: "facilities",
      url: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Computer Lab",
      description: "Computer lab with high-performance systems for residents' use."
    },
    {
      id: 17,
      category: "facilities",
      url: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Laundry Room",
      description: "Modern laundry facility with multiple washers and dryers."
    },
    
    // Events Category
    {
      id: 18,
      category: "events",
      url: "https://images.pexels.com/photos/7214167/pexels-photo-7214167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Movie Night",
      description: "Residents enjoying a movie night in the recreation room."
    },
    {
      id: 19,
      category: "events",
      url: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Game Tournament",
      description: "Students participating in a game tournament in the common area."
    },
    {
      id: 20,
      category: "events",
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Study Group",
      description: "Residents collaborating in a study group session."
    },
    {
      id: 21,
      category: "events",
      url: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Music Night",
      description: "Musical evening featuring talented residents performing for their peers."
    },
    {
      id: 22,
      category: "events",
      url: "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      alt: "Outdoor Gathering",
      description: "Residents enjoying an outdoor social gathering in the hostel garden."
    }
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
                <TabsTrigger value="events">Events</TabsTrigger>
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