import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wifi, 
  Utensils, 
  BookOpen, 
  ShieldCheck, 
  Dumbbell, 
  Tv, 
  Wind, 
  Coffee, 
  Shirt,
  Sparkles,
  Bed,
  UsersRound,
  Gamepad2,
  Signal,
  Printer,
  Phone
} from 'lucide-react';

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

  // Group facilities by category
  const facilitiesData = {
    academic: [
      {
        icon: <BookOpen size={24} />,
        title: "Study Rooms",
        description: "Quiet, well-lit study areas designed for focused learning and productivity. Open 24/7 with ergonomic furniture and ample power outlets."
      },
      {
        icon: <Wifi size={24} />,
        title: "High-Speed Wi-Fi",
        description: "Gigabit fiber internet available throughout the hostel with dedicated bandwidth for streaming and online learning platforms."
      },
      {
        icon: <Printer size={24} />,
        title: "Printing Station",
        description: "Self-service printing, scanning, and copying facilities available at affordable rates for academic and personal use."
      },
      {
        icon: <Signal size={24} />,
        title: "Strong Network Coverage",
        description: "Enhanced mobile network coverage throughout the building, ensuring you stay connected even in basement areas."
      }
    ],
    
    living: [
      {
        icon: <Wind size={24} />,
        title: "Air Conditioning",
        description: "Climate-controlled rooms ensure comfort regardless of the weather outside. Individual temperature controls in each room."
      },
      {
        icon: <Sparkles size={24} />,
        title: "Housekeeping",
        description: "Regular cleaning of common areas and optional room cleaning services to maintain a clean and hygienic environment."
      },
      {
        icon: <Shirt size={24} />,
        title: "Laundry Facilities",
        description: "Modern washing machines and dryers available for residents, along with ironing stations in designated areas."
      },
      {
        icon: <Bed size={24} />,
        title: "Quality Furnishings",
        description: "Comfortable mattresses, sturdy desks, and ample storage space in all rooms for a comfortable living experience."
      }
    ],
    
    recreational: [
      {
        icon: <Dumbbell size={24} />,
        title: "Fitness Center",
        description: "Fully equipped gym with cardio machines, free weights, and workout stations. Open from 5am to 11pm daily for residents."
      },
      {
        icon: <Tv size={24} />,
        title: "Entertainment Room",
        description: "Large-screen TVs with streaming services, gaming consoles, and comfortable seating for relaxation and entertainment."
      },
      {
        icon: <Gamepad2 size={24} />,
        title: "Gaming Zone",
        description: "Dedicated gaming area with high-performance PCs, consoles, and board games for recreational activities."
      },
      {
        icon: <UsersRound size={24} />,
        title: "Community Events",
        description: "Regular social activities, workshops, and events organized to foster community building and networking."
      }
    ],
    
    dining: [
      {
        icon: <Utensils size={24} />,
        title: "Modern Kitchen",
        description: "Fully equipped communal kitchen with modern appliances, including stoves, ovens, microwaves, and refrigerators for meal preparation."
      },
      {
        icon: <Coffee size={24} />,
        title: "Coffee Lounge",
        description: "24/7 coffee and tea station with comfortable seating for quick breaks or casual meetings with friends."
      },
      {
        icon: <UsersRound size={24} />,
        title: "Dining Area",
        description: "Spacious dining area with ample seating for enjoying meals or group study sessions in a comfortable setting."
      }
    ],
    
    security: [
      {
        icon: <ShieldCheck size={24} />,
        title: "24/7 Security",
        description: "Round-the-clock security personnel and CCTV surveillance to ensure the safety of all residents and their belongings."
      },
      {
        icon: <Phone size={24} />,
        title: "Emergency Response",
        description: "Quick response protocols for emergencies with direct lines to medical, fire, and police services for immediate assistance."
      }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl text-slate-300">
              Modern amenities designed to enhance your living experience and academic success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-6 w-full max-w-3xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="living">Living</TabsTrigger>
                <TabsTrigger value="recreational">Recreation</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {Object.values(facilitiesData).flat().map((facility, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-md mb-3">
                          {facility.icon}
                        </div>
                        <CardTitle className="text-xl">{facility.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-muted-foreground">
                          {facility.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {Object.entries(facilitiesData).map(([category, facilities]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {facilities.map((facility, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
                        <CardHeader className="pb-2">
                          <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-md mb-3">
                            {facility.icon}
                          </div>
                          <CardTitle className="text-xl">{facility.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base text-muted-foreground">
                            {facility.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      {/* Maintenance Request Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Facility Maintenance</h2>
            <p className="text-slate-600 mb-8">
              We are committed to keeping all facilities in perfect working condition. 
              If you encounter any issues, please submit a maintenance request.
            </p>
            <Button size="lg">
              Submit Maintenance Request
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}