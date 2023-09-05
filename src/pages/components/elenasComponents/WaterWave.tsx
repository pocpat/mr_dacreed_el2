import React, { useEffect, useRef } from "react";

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
        waterContainer.style.animationPlayState = "paused";
      } else {
        window.requestAnimationFrame(step);
      }
    }

    if (waterContainer) {
      window.requestAnimationFrame(step);
    }
  }, []);

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div
        ref={waterContainerRef}
        className="relative h-48 w-48 overflow-hidden rounded-full bg-blue-300 shadow-inner"
      />
    </section>
  );
};

export default WaterWave;
