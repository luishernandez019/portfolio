import { useEffect, useState } from "react";

type Phase = "typing" | "pausing" | "deleting";

export const useTypingEffect = (
  words: string[],
  typeSpeed = 85,
  deleteSpeed = 45,
  pauseTime = 1800
) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typeSpeed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseTime);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(d => d.slice(0, -1)),
          deleteSpeed
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex(i => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return { displayed, isTyping: phase === "typing" };
};
