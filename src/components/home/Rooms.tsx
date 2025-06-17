import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BedDoubleIcon, ExternalLink, Check } from 'lucide-react';

interface RoomCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  tourLink: string;
}

function RoomCard({ title, description, imageUrl, features, tourLink }: RoomCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded text-xs font-medium">
          Virtual Tour
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <BedDoubleIcon className="mr-2 h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-sm text-slate-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <a href={tourLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Take Virtual Tour <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Rooms() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rooms = [
    {
      title: "Double Room",
      description: "Ideal for those who enjoy companionship while maintaining comfort.",
      imageUrl: "/images/roomimg5.jpg",
      features: [
        "Two single beds",
        "Twin study desks and chairs",
        "Shared wardrobe space",
        "Air Cooled Room",
      ],
      tourLink: "https://example.com/virtual-tour/double-room"
    },
    {
      title: "Triple Room",
      description: "Perfect for small groups or friends sharing a space together.",
      imageUrl: "/images/roomimg3.jpg",
      features: [
        "Three single beds",
        "Three study desks and chairs",
        "Shared wardrobe space",
        "Air Cooled Room",
      ],
      tourLink: "https://example.com/virtual-tour/premium-suite"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Our Rooms</h2>
          <p className="text-slate-600">
            We offer a variety of room types to suit different preferences and budgets. 
            Take a virtual tour to experience the comfort and amenities firsthand.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${rooms.length === 2 ? '2' : '3'} gap-8 ${
            rooms.length === 2 ? 'lg:max-w-5xl mx-auto' : ''
          }`}
        >
          {rooms.map((room, index) => (
            <motion.div key={index} variants={itemVariants}>
              <RoomCard
                title={room.title}
                description={room.description}
                imageUrl={room.imageUrl}
                features={room.features}
                tourLink={room.tourLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}