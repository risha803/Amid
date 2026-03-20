import { useEffect, useState } from "react";

type Params = {
  end: number;
  duration?: number;
  start: boolean;
};

export const useCountUp = ({ end, duration = 1500, start }: Params) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      const current = Math.floor(percent * end);
      setValue(current);

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return value;
};