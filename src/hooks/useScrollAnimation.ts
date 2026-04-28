import { useEffect } from "react";

const SELECTOR = [
  ".service-card",
  ".stack-card",
  ".project-card",
  ".timeline-item",
  ".education-container",
  ".contact-card",
].join(", ");

export const useScrollAnimation = () => {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (el: Element) => {
      if (observed.has(el)) return;
      observed.add(el);

      // Stagger based on index among visible siblings
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter(c =>
            c.matches(SELECTOR)
          )
        : [];
      const index = siblings.indexOf(el);
      (el as HTMLElement).style.setProperty("--stagger", `${index * 0.08}s`);

      intersectionObserver.observe(el);
    };

    // Observe elements already in the DOM
    document.querySelectorAll(SELECTOR).forEach(observe);

    // Watch for lazy-loaded components adding new elements
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(SELECTOR).forEach(observe);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
