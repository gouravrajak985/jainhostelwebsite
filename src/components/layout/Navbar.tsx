import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Home, BuildingIcon, PanelTopIcon, ImageIcon, PhoneCallIcon, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const routes = [
  { name: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-2" /> },
  { name: 'Facilities', path: '/facilities', icon: <PanelTopIcon className="h-4 w-4 mr-2" /> },
  { name: 'Photos', path: '/photos', icon: <ImageIcon className="h-4 w-4 mr-2" /> },
  { name: 'Contact Us', path: '/contact', icon: <PhoneCallIcon className="h-4 w-4 mr-2" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full border",
        isScrolled 
          ? "bg-white shadow-lg border-slate-200" 
          : "bg-white border-slate-200"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-slate-900"
            onClick={handleLinkClick}
          >
            <BuildingIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Boy's Stay Hostel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {routes.map((route) => (
                  <NavigationMenuItem key={route.path}>
                    <Link to={route.path} onClick={handleLinkClick}>
                      <NavigationMenuLink 
                        className={cn(
                          "px-4 py-2 rounded-full transition-colors duration-300 inline-flex items-center",
                          location.pathname === route.path 
                            ? "text-primary font-medium bg-primary/10" 
                            : "text-slate-700 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {route.icon}
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              asChild
              className="rounded-full transition-all duration-300 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact" onClick={handleLinkClick}>Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden rounded-full text-slate-900"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={handleLinkClick}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg transition-colors",
                      location.pathname === route.path
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {route.icon}
                    {route.name}
                  </Link>
                ))}
                <Button className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact" onClick={handleLinkClick}>Get in Touch</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}