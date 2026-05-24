import { useState, useEffect, useRef } from "react";

export function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold });

    if (currentRef) obs.observe(currentRef);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}