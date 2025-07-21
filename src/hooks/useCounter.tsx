import { useEffect, useState } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  isInView?: boolean;
}

export const useCounter = ({ end, duration = 2000, start = 0, isInView = true }: UseCounterOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (endValue - startValue) * easeOutQuart;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, isInView]);

  return count;
};
