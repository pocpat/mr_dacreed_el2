import React, { useEffect, useRef } from 'react';

const WaterWave: React.FC = () => {
  const waterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const waterContainer = waterContainerRef.current;
    if (!waterContainer) return;

    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (progress >= 12000 && waterContainer) {
        waterContainer.style.animationPlayState = 'paused';
      } else {
        window.requestAnimationFrame(step);
      }
    }

    if (waterContainer) {
      window.requestAnimationFrame(step);
    }
  }, []);

  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div
        ref={waterContainerRef}
        className="w-48 h-48 bg-blue-300 rounded-full shadow-inner relative overflow-hidden"
      />
    </section>
  );
};

export default WaterWave;

