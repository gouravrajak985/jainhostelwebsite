import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  HomeIcon,
  Calendar,
  HelpCircle
} from 'lucide-react';

export function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">
              Get in touch with us for inquiries, bookings, or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-t-4 border-t-blue-500">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                    <PhoneCall size={24} />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700">
                    <p className="mb-2">Main Office:</p>
                    <p className="font-medium text-slate-900">+1 (555) 123-4567</p>
                    <p className="mt-4 mb-2">Warden/Security:</p>
                    <p className="font-medium text-slate-900">+1 (555) 987-6543</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-t-4 border-t-green-500">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                    <Mail size={24} />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700">
                    <p className="mb-2">General Inquiries:</p>
                    <p className="font-medium text-slate-900">info@boyshostel.com</p>
                    <p className="mt-4 mb-2">Bookings & Admissions:</p>
                    <p className="font-medium text-slate-900">admissions@boyshostel.com</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-t-4 border-t-purple-500">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4">
                    <MapPin size={24} />
                  </div>
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700">
                    <p className="font-medium text-slate-900">
                      123 University Avenue,<br />
                      College District,<br />
                      City Center,<br />
                      State 12345
                    </p>
                    <p className="mt-4 text-sm">
                      Near Central Metro Station
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-t-4 border-t-amber-500">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full mb-4">
                    <Clock size={24} />
                  </div>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700">
                    <p className="mb-2">Monday - Friday:</p>
                    <p className="font-medium text-slate-900">9:00 AM - 8:00 PM</p>
                    <p className="mt-4 mb-2">Saturday - Sunday:</p>
                    <p className="font-medium text-slate-900">10:00 AM - 6:00 PM</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map and Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us</h2>
              <div className="h-[400px] bg-white rounded-lg shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645908687169!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Directions</h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-start">
                    <span className="font-medium mr-2">From Airport:</span> 
                    <span>Take the Airport Express to Central Station, then Bus 42 to University Avenue.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">By Public Transport:</span> 
                    <span>Subway Blue Line to Central Metro Station, 5-minute walk towards University Avenue.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">By Car:</span> 
                    <span>From Highway 101, take Exit 25B, follow University Avenue for 2 miles. Visitor parking available.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="contact">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="contact" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact
                      </TabsTrigger>
                      <TabsTrigger value="booking" className="flex items-center">
                        <HomeIcon className="h-4 w-4 mr-2" />
                        Booking
                      </TabsTrigger>
                      <TabsTrigger value="visit" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Visit
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contact">
                      <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" />
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="Inquiry subject" />
                        </div>
                        <div className="space-y-2 mb-6">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Your message" rows={5} />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="booking">
                      <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="booking-name">Name</Label>
                            <Input id="booking-name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="booking-email">Email</Label>
                            <Input id="booking-email" type="email" placeholder="Your email" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Your phone number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="room-type">Room Type</Label>
                            <select id="room-type" className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                              <option value="">Select Room Type</option>
                              <option value="single">Single Room</option>
                              <option value="double">Double Room</option>
                              <option value="premium">Premium Suite</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="check-in">Expected Check-in</Label>
                            <Input id="check-in" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="duration">Duration of Stay</Label>
                            <select id="duration" className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                              <option value="">Select Duration</option>
                              <option value="semester">One Semester</option>
                              <option value="year">One Academic Year</option>
                              <option value="custom">Custom Duration</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2 mb-6">
                          <Label htmlFor="booking-notes">Additional Notes</Label>
                          <Textarea id="booking-notes" placeholder="Any specific requirements or questions" rows={3} />
                        </div>
                        <Button type="submit" className="w-full">Submit Booking Inquiry</Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="visit">
                      <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="visit-name">Name</Label>
                            <Input id="visit-name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="visit-email">Email</Label>
                            <Input id="visit-email" type="email" placeholder="Your email" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="visit-phone">Phone</Label>
                            <Input id="visit-phone" type="tel" placeholder="Your phone number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="visit-date">Preferred Visit Date</Label>
                            <Input id="visit-date" type="date" />
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="visit-time">Preferred Time</Label>
                          <select id="visit-time" className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                            <option value="">Select Time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (1PM - 4PM)</option>
                            <option value="evening">Evening (5PM - 7PM)</option>
                          </select>
                        </div>
                        <div className="space-y-2 mb-6">
                          <Label htmlFor="visit-notes">Additional Information</Label>
                          <Textarea id="visit-notes" placeholder="Any specific requirements or questions about the visit" rows={3} />
                        </div>
                        <Button type="submit" className="w-full">Schedule Visit</Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Quick answers to common questions. If you don't find what you're looking for, please contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  What are the check-in and check-out times?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Standard check-in time is from 10 AM to 6 PM. Check-out is required by 12 PM. Early check-in or late check-out may be arranged with prior approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Is there a security deposit?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, we require a security deposit equivalent to one month's rent. This is refundable at the end of your stay, subject to a room inspection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Are meals included in the rent?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Basic rent does not include meals. However, we offer optional meal plans that can be added to your accommodation package. We also have a fully equipped communal kitchen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  What's your cancellation policy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Cancellations made at least 30 days before check-in receive a full refund minus the application fee. Cancellations with less notice may be subject to additional charges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Are visitors allowed?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Visitors are allowed in common areas from 8 AM to 10 PM. Overnight guests require prior approval and may incur additional charges. All visitors must sign in at reception.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Is there parking available?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Limited parking is available for residents at an additional monthly fee. Visitor parking is available on a first-come, first-served basis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}