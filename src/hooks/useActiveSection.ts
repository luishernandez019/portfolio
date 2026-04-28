import { useEffect, useState } from "react";

const SECTION_IDS = ["stack", "experience", "projects", "contact"];

export const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observed = new Set<string>();
    const intersecting = new Set<string>();

    const update = () => {
      const current = SECTION_IDS.find(id => intersecting.has(id));
      if (current) setActive(current);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });
        update();
      },
      { threshold: 0, rootMargin: "-70px 0px -50% 0px" }
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
