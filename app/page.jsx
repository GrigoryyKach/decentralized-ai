'use client';

import Cards from '@/components/Cards';
import Hero from '../components/Hero';
import LeaderboardSection from '../components/LeaderboardSection';
import useLenis from '../hooks/useLenis';
import Navbar from '@/components/Navbar';

export default function Home() {
  useLenis();
  
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <LeaderboardSection />
    </>
  );
}
