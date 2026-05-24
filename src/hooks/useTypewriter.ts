import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed = 40, delay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed("");
    setDone(false);
    let i = 0;

    const t0 = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(iv);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(iv);
    }, delay);

    return () => clearTimeout(t0);
  }, [text, speed, delay, enabled]);

  return { displayed, done };
}