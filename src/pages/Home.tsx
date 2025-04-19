import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Facilities } from '@/components/home/Facilities';
import { Rooms } from '@/components/home/Rooms';
import { PlacesNearby } from '@/components/home/PlacesNearby';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <PlacesNearby />
    </>
  );
}