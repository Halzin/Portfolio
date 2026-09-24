const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const kinetic = document.querySelector("[data-kinetic]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.querySelector(".sr-only").textContent = open ? "Abrir menu" : "Fechar menu";
  nav?.classList.toggle("is-open", !open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.querySelector(".sr-only").textContent = "Abrir menu";
    nav.classList.remove("is-open");
  });
});

if (kinetic && !reduceMotion.matches) {
  kinetic.addEventListener("pointermove", (event) => {
    const bounds = kinetic.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    kinetic.querySelectorAll("[data-shift]").forEach((word) => {
      const factor = Number(word.dataset.shift);
      word.style.setProperty("--row-x", `${x * 44 * factor}px`);
      word.style.setProperty("--row-y", `${y * 22 * factor}px`);
    });
  });

  kinetic.addEventListener("pointerleave", () => {
    kinetic.querySelectorAll("[data-shift]").forEach((word) => {
      word.style.setProperty("--row-x", "0px");
      word.style.setProperty("--row-y", "0px");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6%" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
