import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  History, 
  Target, 
  Award,
  Star,
  Heart, 
  Shield,
  Clock,
  User,
  Briefcase
} from 'lucide-react';

function About() {
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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Hostel</h1>
            <p className="text-xl text-slate-300">
              Creating a home away from home for students and young professionals since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Founded in 2018, Boy's Hostel began with a simple mission: to provide affordable, 
                comfortable, and safe accommodation for students pursuing their education away from home. 
                What started as a small facility with just 20 rooms has now grown into a premier 
                hostel with over 100 rooms, housing students from across the country and around the world.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Our founder, John Smith, experienced firsthand the challenges of finding suitable 
                accommodation during his university years. This personal experience inspired him to create 
                a living environment that not only meets the basic needs of students but also fosters a 
                sense of community and supports academic success.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Over the years, we have continuously improved our facilities and services based on 
                resident feedback and evolving needs. Today, we are proud to be recognized as one of 
                the top-rated student hostels in the region, known for our commitment to quality, 
                safety, and resident satisfaction.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="order-first lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Hostel History 1" 
                    className="rounded-lg h-64 w-full object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Hostel History 2" 
                    className="rounded-lg h-40 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Hostel History 3" 
                    className="rounded-lg h-40 w-full object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Hostel History 4" 
                    className="rounded-lg h-64 w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">
              These principles guide everything we do, from daily operations to long-term planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Star size={24} />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We strive for excellence in every aspect of our service, constantly seeking ways to improve and exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                  <Heart size={24} />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We foster a supportive community where residents can build lasting friendships and grow personally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
                  <Shield size={24} />
                </div>
                <CardTitle>Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The safety and security of our residents is our top priority, with measures in place to ensure peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full mb-4">
                  <Clock size={24} />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We deliver consistent, dependable service that our residents can count on day after day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-slate-600">
              Meet the dedicated individuals who work tirelessly to make your stay comfortable and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="John Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>John Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">Founder & Director</p>
                <p className="text-slate-600 text-sm">
                  John founded the hostel in 2018 with a vision to create a supportive living environment for students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">Hostel Manager</p>
                <p className="text-slate-600 text-sm">
                  Sarah oversees daily operations and ensures that all residents' needs are promptly addressed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="David Chen" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>David Chen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">Facilities Manager</p>
                <p className="text-slate-600 text-sm">
                  David ensures that all facilities are well-maintained and functioning optimally for residents' comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Jessica Martinez" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>Jessica Martinez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">Resident Counselor</p>
                <p className="text-slate-600 text-sm">
                  Jessica provides support and guidance to residents, helping them adjust to hostel life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials and FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="testimonials" className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="testimonials" className="px-6">Testimonials</TabsTrigger>
                <TabsTrigger value="faq" className="px-6">Frequently Asked Questions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Michael" />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael P.</p>
                        <p className="text-sm text-slate-500">Engineering Student</p>
                      </div>
                    </div>
                    <p className="text-slate-600 italic">
                      "Living at Boy's Hostel has been an incredible experience. The facilities are top-notch, and the staff goes above and beyond to create a supportive environment. I've made lifelong friends here!"
                    </p>
                    <div className="flex text-amber-400 mt-4">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Alex" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Alex T.</p>
                        <p className="text-sm text-slate-500">Business Student</p>
                      </div>
                    </div>
                    <p className="text-slate-600 italic">
                      "The study rooms and high-speed internet have been crucial for my academic success. The location is perfect, with easy access to the university and nearby amenities. Highly recommend!"
                    </p>
                    <div className="flex text-amber-400 mt-4">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Raj" />
                        <AvatarFallback>R</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Raj K.</p>
                        <p className="text-sm text-slate-500">Medical Student</p>
                      </div>
                    </div>
                    <p className="text-slate-600 italic">
                      "Security was my biggest concern when looking for accommodation, and Boy's Hostel exceeded my expectations. The 24/7 security and controlled access give me peace of mind to focus on my studies."
                    </p>
                    <div className="flex text-amber-400 mt-4">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" alt="Jason" />
                        <AvatarFallback>J</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jason L.</p>
                        <p className="text-sm text-slate-500">IT Professional</p>
                      </div>
                    </div>
                    <p className="text-slate-600 italic">
                      "As a working professional, I appreciate the quiet environment and the ability to network with other residents. The common areas are great for socializing, and the rooms provide the privacy I need."
                    </p>
                    <div className="flex text-amber-400 mt-4">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      What is the minimum stay period?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Our minimum stay period is one semester (approximately 4 months). However, we offer flexible options for shorter stays during summer and winter breaks.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      Do you accept working professionals?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Yes, we welcome both students and young working professionals. We maintain a conducive environment for both study and work.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      What security measures are in place?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      We have 24/7 security personnel, CCTV surveillance throughout common areas, secure access control systems, and emergency response protocols in place.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Utensils className="h-5 w-5 mr-2 text-primary" />
                      Are meals provided?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      We offer optional meal plans that can be added to your accommodation package. We also have a fully equipped communal kitchen for residents who prefer to cook their own meals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default About;

export { About }