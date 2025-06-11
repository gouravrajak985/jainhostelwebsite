import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  BuildingIcon, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BuildingIcon className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Boy's Hostel</span>
            </div>
            <p className="text-slate-300 mb-6">
              Our hostel provides a comfortable and secure living environment for students and working professionals. 
              With modern amenities and a supportive community, we ensure your stay is productive and enjoyable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> Facilities
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> Rooms
                </Link>
              </li>
              <li>
                <Link to="/photos" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">•</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-slate-300">+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-slate-300">info@boyshostel.com</p>
                  <p className="text-slate-300">support@boyshostel.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <p className="text-slate-300">
                  123 University Avenue, College District,
                  <br />City Center, State 12345
                </p>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-slate-300">Monday - Friday: 9am - 8pm</p>
                  <p className="text-slate-300">Saturday - Sunday: 10am - 6pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Find Us on Google */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Find Us on Google</h3>
            <div className="h-64 bg-slate-800 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645908687169!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="grayscale"
              ></iframe>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Boy's Hostel. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}