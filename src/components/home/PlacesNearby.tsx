import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { School, BookOpen, ShoppingBag, Train, Coffee, Utensils, Hospital, Film } from 'lucide-react';

interface PlaceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
  category: string;
}

function PlaceCard({ icon, title, description, distance, travelTime, category }: PlaceCardProps) {
  const getCategoryColor = (category: string) => {
    switch(category.toLowerCase()) {
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'transport': return 'bg-orange-100 text-orange-800';
      case 'shopping': return 'bg-purple-100 text-purple-800';
      case 'dining': return 'bg-green-100 text-green-800';
      case 'healthcare': return 'bg-red-100 text-red-800';
      case 'entertainment': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge variant="secondary" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-3">
          {description}
        </CardDescription>
        <div className="flex text-sm text-slate-500">
          <div className="mr-4">📍 {distance}</div>
          <div>⏱️ {travelTime}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PlacesNearby() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const places = [
    {
      icon: <School size={20} />,
      title: "City University",
      description: "Top-ranked university offering a wide range of undergraduate and graduate programs.",
      distance: "0.5 km",
      travelTime: "7 min walk",
      category: "Education"
    },
    {
      icon: <BookOpen size={20} />,
      title: "Central Library",
      description: "Comprehensive research library with quiet study spaces and extensive collections.",
      distance: "0.7 km",
      travelTime: "10 min walk",
      category: "Education"
    },
    {
      icon: <Train size={20} />,
      title: "Metro Station",
      description: "Direct connections to all major parts of the city via the Metro Blue Line.",
      distance: "0.3 km",
      travelTime: "5 min walk",
      category: "Transport"
    },
    {
      icon: <ShoppingBag size={20} />,
      title: "Market Square",
      description: "Shopping complex with grocery stores, stationery shops, and retail outlets.",
      distance: "0.8 km",
      travelTime: "12 min walk",
      category: "Shopping"
    },
    {
      icon: <Coffee size={20} />,
      title: "Student Café",
      description: "Popular café offering affordable meals, coffee, and a great study environment.",
      distance: "0.4 km",
      travelTime: "6 min walk",
      category: "Dining"
    },
    {
      icon: <Utensils size={20} />,
      title: "Food Court",
      description: "Variety of dining options from local cuisine to international fast food chains.",
      distance: "0.6 km",
      travelTime: "9 min walk",
      category: "Dining"
    },
    {
      icon: <Hospital size={20} />,
      title: "Health Center",
      description: "Medical facility offering emergency services and general healthcare.",
      distance: "1.0 km",
      travelTime: "15 min walk",
      category: "Healthcare"
    },
    {
      icon: <Film size={20} />,
      title: "Cinema Complex",
      description: "Modern theater showing the latest releases with student discounts available.",
      distance: "1.2 km",
      travelTime: "5 min by bus",
      category: "Entertainment"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Places Nearby</h2>
          <p className="text-slate-600">
            Our hostel is strategically located with easy access to educational institutions, 
            transportation hubs, shopping centers, and recreational facilities.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {places.map((place, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PlaceCard
                icon={place.icon}
                title={place.title}
                description={place.description}
                distance={place.distance}
                travelTime={place.travelTime}
                category={place.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}