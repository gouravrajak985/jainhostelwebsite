import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Utensils, 
  BookOpen, 
  ShieldCheck, 
  Dumbbell, 
  Tv, 
  Wind, 
  Coffee 
} from 'lucide-react';

interface FacilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FacilityCard({ icon, title }: FacilityProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-md mb-3">
          {icon}
        </div>
        <CardTitle className="text-xl pb-4">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}

export function Facilities() {
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

  const facilities = [
    {
      icon: <Wifi size={24} />,
      title: "High-Speed Wi-Fi",
      description: "Stay connected with our high-speed internet available throughout the hostel."
    },
    {
      icon: <Utensils size={24} />,
      title: "Modern Kitchen",
      description: "Fully equipped communal kitchen with modern appliances for preparing meals."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Study Rooms",
      description: "Quiet, well-lit study areas designed for focused learning and productivity."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring and secure access control."
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Fitness Center",
      description: "Stay fit with our fully equipped gym facility available for all residents."
    },
    {
      icon: <Tv size={24} />,
      title: "Recreation Room",
      description: "Entertainment area with TV, gaming consoles, and table games for relaxation."
    },
    {
      icon: <Wind size={24} />,
      title: "Air Conditioning",
      description: "Climate-controlled rooms ensure comfort regardless of the weather outside."
    },
    {
      icon: <Coffee size={24} />,
      title: "Common Lounge",
      description: "Comfortable lounge areas for socializing and building community."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Facilities</h2>
          <p className="text-slate-600">
            Experience comfortable living with our wide range of amenities designed to make your stay both productive and enjoyable.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((facility, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FacilityCard
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/facilities">
              View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}