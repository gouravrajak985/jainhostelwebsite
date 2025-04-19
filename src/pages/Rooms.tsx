import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BedDoubleIcon, ExternalLink, Check, Info, Users, Square, Wifi, Tv, Wind } from 'lucide-react';

interface Room {
  id: string;
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  size: string;
  occupancy: string;
  availability: string;
  features: string[];
  amenities: string[];
  tourLink: string;
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

  // Mock room data
  const rooms: Room[] = [
    {
      id: "single-standard",
      type: "single",
      title: "Standard Single Room",
      description: "Compact and comfortable single occupancy room ideal for students who prefer privacy.",
      imageUrl: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$300/month",
      size: "120 sq ft",
      occupancy: "1 person",
      availability: "10 rooms available",
      features: [
        "Single bed (90cm x 200cm)",
        "Study desk and chair",
        "Wardrobe",
        "Bookshelf",
        "Mini-refrigerator"
      ],
      amenities: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "24/7 hot water",
        "Weekly cleaning service"
      ],
      tourLink: "https://example.com/virtual-tour/single-standard"
    },
    {
      id: "single-deluxe",
      type: "single",
      title: "Deluxe Single Room",
      description: "Spacious single room with enhanced amenities for increased comfort and productivity.",
      imageUrl: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$350/month",
      size: "150 sq ft",
      occupancy: "1 person",
      availability: "5 rooms available",
      features: [
        "Single bed with premium mattress",
        "Ergonomic study desk and chair",
        "Large wardrobe",
        "Extended bookshelf",
        "Mini-refrigerator",
        "Window with city view"
      ],
      amenities: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "24/7 hot water",
        "Television",
        "Twice weekly cleaning service"
      ],
      tourLink: "https://example.com/virtual-tour/single-deluxe"
    },
    {
      id: "double-standard",
      type: "double",
      title: "Standard Double Room",
      description: "Comfortable shared room for two students with separate spaces for study and rest.",
      imageUrl: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$250/month per person",
      size: "180 sq ft",
      occupancy: "2 persons",
      availability: "8 rooms available",
      features: [
        "Two single beds",
        "Dual study desks and chairs",
        "Individual wardrobes",
        "Shared bookshelves",
        "Mini-refrigerator"
      ],
      amenities: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "24/7 hot water",
        "Weekly cleaning service"
      ],
      tourLink: "https://example.com/virtual-tour/double-standard"
    },
    {
      id: "double-deluxe",
      type: "double",
      title: "Deluxe Double Room",
      description: "Spacious room for two with enhanced privacy features and premium furnishings.",
      imageUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$300/month per person",
      size: "220 sq ft",
      occupancy: "2 persons",
      availability: "4 rooms available",
      features: [
        "Two single beds with premium mattresses",
        "Ergonomic study desks and chairs",
        "Individual wardrobes with lockable sections",
        "Extended bookshelves",
        "Mini-refrigerator",
        "Room divider for enhanced privacy"
      ],
      amenities: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "24/7 hot water",
        "Television",
        "Twice weekly cleaning service"
      ],
      tourLink: "https://example.com/virtual-tour/double-deluxe"
    },
    {
      id: "suite",
      type: "premium",
      title: "Premium Suite",
      description: "Luxurious accommodation with separate sleeping and study areas for ultimate comfort.",
      imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$450/month",
      size: "280 sq ft",
      occupancy: "1 person",
      availability: "3 suites available",
      features: [
        "Queen-sized bed with premium mattress",
        "Dedicated study area with ergonomic furniture",
        "Walk-in wardrobe",
        "Built-in bookshelves",
        "Refrigerator",
        "Microwave",
        "Private balcony (select suites)"
      ],
      amenities: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "24/7 hot water",
        "Television",
        "Daily cleaning service",
        "Private bathroom",
        "Premium toiletries"
      ],
      tourLink: "https://example.com/virtual-tour/premium-suite"
    },
    {
      id: "executive-suite",
      type: "premium",
      title: "Executive Suite",
      description: "Our most exclusive offering with a bedroom, study, and living area for a true home experience.",
      imageUrl: "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$550/month",
      size: "350 sq ft",
      occupancy: "1-2 persons",
      availability: "2 suites available",
      features: [
        "Queen-sized bed with luxury mattress",
        "Separate study room with complete workstation",
        "Walk-in wardrobe",
        "Custom bookshelves",
        "Mini kitchenette with refrigerator and microwave",
        "Small dining area",
        "Private balcony with seating"
      ],
      amenities: [
        "Climate control system",
        "Premium high-speed Wi-Fi",
        "24/7 hot water",
        "Smart TV",
        "Daily cleaning service",
        "Private bathroom with rainfall shower",
        "Luxury toiletries",
        "Coffee machine"
      ],
      tourLink: "https://example.com/virtual-tour/executive-suite"
    }
  ];

  // State for selected room for more details
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Rooms</h1>
            <p className="text-xl text-slate-300">
              Comfortable, well-designed spaces to support your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all">All Rooms</TabsTrigger>
                <TabsTrigger value="single">Single Rooms</TabsTrigger>
                <TabsTrigger value="double">Double Rooms</TabsTrigger>
                <TabsTrigger value="premium">Premium Suites</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {rooms.map((room) => (
                  <RoomCard 
                    key={room.id} 
                    room={room} 
                    onClick={() => setSelectedRoom(room)}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            </TabsContent>

            {["single", "double", "premium"].map((type) => (
              <TabsContent key={type} value={type}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {rooms
                    .filter((room) => room.type === type)
                    .map((room) => (
                      <RoomCard 
                        key={room.id} 
                        room={room} 
                        onClick={() => setSelectedRoom(room)}
                        variants={itemVariants}
                      />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Room Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Room Comparison</h2>
            <p className="text-slate-600">
              Compare our room types to find the perfect match for your needs and budget.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Room Type</th>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Occupancy</th>
                  <th className="p-4 text-left">Pricing</th>
                  <th className="p-4 text-left">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Standard Single Room</td>
                  <td className="p-4">120 sq ft</td>
                  <td className="p-4">1 person</td>
                  <td className="p-4">$300/month</td>
                  <td className="p-4">Basic amenities, ideal for budget-conscious students</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Deluxe Single Room</td>
                  <td className="p-4">150 sq ft</td>
                  <td className="p-4">1 person</td>
                  <td className="p-4">$350/month</td>
                  <td className="p-4">Enhanced amenities, premium furnishings, better views</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Standard Double Room</td>
                  <td className="p-4">180 sq ft</td>
                  <td className="p-4">2 persons</td>
                  <td className="p-4">$250/month per person</td>
                  <td className="p-4">Economical option for those who prefer sharing</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Deluxe Double Room</td>
                  <td className="p-4">220 sq ft</td>
                  <td className="p-4">2 persons</td>
                  <td className="p-4">$300/month per person</td>
                  <td className="p-4">Spacious shared accommodation with privacy features</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Premium Suite</td>
                  <td className="p-4">280 sq ft</td>
                  <td className="p-4">1 person</td>
                  <td className="p-4">$450/month</td>
                  <td className="p-4">Luxury single accommodation with private bathroom</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium">Executive Suite</td>
                  <td className="p-4">350 sq ft</td>
                  <td className="p-4">1-2 persons</td>
                  <td className="p-4">$550/month</td>
                  <td className="p-4">Our most exclusive offering with multiple rooms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Information</h2>
              <p className="text-slate-600">
                Learn about our booking process, requirements, and policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    How to Book
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                    <li>Submit an online application through our website</li>
                    <li>Pay the application fee ($50, non-refundable)</li>
                    <li>Receive confirmation within 2-3 business days</li>
                    <li>Pay the security deposit to secure your room</li>
                    <li>Complete the room agreement form</li>
                    <li>Schedule your move-in date</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Application</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    Requirements & Policies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Valid student ID or proof of enrollment/employment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Security deposit (1 month's rent)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>First month's rent in advance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Signed rental agreement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Minimum stay period: One semester</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Full Policies
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Dialog */}
      <Dialog open={selectedRoom !== null} onOpenChange={(open) => !open && setSelectedRoom(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedRoom?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedRoom && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                  <img
                    src={selectedRoom.imageUrl}
                    alt={selectedRoom.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center">
                    <Users className="mr-1 h-3 w-3" />
                    {selectedRoom.occupancy}
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Square className="mr-1 h-3 w-3" />
                    {selectedRoom.size}
                  </Badge>
                  <Badge className="bg-primary">{selectedRoom.price}</Badge>
                </div>
              </div>
              
              <div>
                <p className="text-slate-700 mb-4">{selectedRoom.description}</p>
                
                <h4 className="font-semibold text-lg mb-2">Features</h4>
                <ul className="space-y-1 mb-4">
                  {selectedRoom.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-semibold text-lg mb-2">Amenities</h4>
                <ul className="space-y-1 mb-4">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-slate-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-slate-600 mb-4">
                  <span className="font-medium">Availability:</span> {selectedRoom.availability}
                </p>
                
                <div className="flex space-x-4">
                  <Button asChild className="flex-1">
                    <a href="#" className="flex items-center justify-center">
                      Book Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedRoom.tourLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Virtual Tour <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

interface RoomCardProps {
  room: Room;
  onClick: () => void;
  variants: any;
}

function RoomCard({ room, onClick, variants }: RoomCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={onClick}>
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={room.imageUrl}
              alt={room.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded text-xs font-medium">
            Virtual Tour
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="flex items-center text-xl">
              <BedDoubleIcon className="mr-2 h-5 w-5 text-primary" />
              {room.title}
            </CardTitle>
            <Badge className="bg-primary">{room.price}</Badge>
          </div>
          <CardDescription>{room.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              {room.occupancy}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Square className="mr-1 h-3 w-3" />
              {room.size}
            </Badge>
          </div>
          <Separator className="my-3" />
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex items-center text-sm text-slate-700">
              <Wifi className="h-4 w-4 mr-2 text-slate-400" />
              <span>Wi-Fi</span>
            </div>
            <div className="flex items-center text-sm text-slate-700">
              <Wind className="h-4 w-4 mr-2 text-slate-400" />
              <span>AC</span>
            </div>
            {room.amenities.includes("Television") && (
              <div className="flex items-center text-sm text-slate-700">
                <Tv className="h-4 w-4 mr-2 text-slate-400" />
                <span>TV</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}