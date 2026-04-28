import { useEffect, useState } from "react";

const SECTION_IDS = ["stack", "experience", "projects", "contact"];

export const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observed = new Set<string>();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-70px 0px -45% 0px" }
    );

    const tryObserve = () => {
      SECTION_IDS.forEach(id => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };

    tryObserve();

    const mutationObserver = new MutationObserver(tryObserve);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return active;
};
