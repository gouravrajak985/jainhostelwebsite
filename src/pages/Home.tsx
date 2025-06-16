import { Hero } from '@/components/home/Hero';
import { Facilities } from '@/components/home/Facilities';
import { Gallery } from '@/components/home/Gallery';
import { Rooms } from '@/components/home/Rooms';
import { PlacesNearby } from '@/components/home/PlacesNearby';

export function Home() {
  return (
    <>
      <Hero />
      <Facilities />
      <Gallery />
      <Rooms />
      <PlacesNearby />
    </>
  );
}