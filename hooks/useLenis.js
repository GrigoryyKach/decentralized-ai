'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export let lenis = null;

export default function useLenis() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
