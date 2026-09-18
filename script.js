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
const projectChoices = document.querySelectorAll("[data-project]");
const projectPreview = document.querySelector("[data-project-preview]");

const projects = {
  moda: {
    label: "Case conceitual · Boutique local",
    title: "AURA",
    description: "Uma boutique autoral, próxima e acessível, criada para valorizar pequenas coleções, atendimento local e venda pelo WhatsApp.",
    href: "https://aura-boutique-eta.vercel.app/",
    action: "Ver case completo",
    image: "https://aura-boutique-eta.vercel.app/assets/hero-aura.png",
    available: true,
  },
  gastronomia: {
    label: "Próximo case · Gastronomia",
    title: "Sabor em construção",
    description: "Um novo conceito para transformar cardápio, atmosfera e pedidos diretos em uma experiência digital marcante.",
    action: "Case em produção",
    image: "",
    available: false,
  },
  servicos: {
    label: "Próximo case · Serviços",
    title: "Presença que explica",
    description: "Um conceito pensado para negócios que precisam apresentar seu valor com clareza e levar o visitante até o contato.",
    action: "Case em produção",
    image: "",
    available: false,
  },
};

projectChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const project = projects[choice.dataset.project];
    const image = projectPreview?.querySelector("[data-project-image]");
    const label = projectPreview?.querySelector("[data-project-label]");
    const title = projectPreview?.querySelector("[data-project-title]");
    const description = projectPreview?.querySelector("[data-project-description]");
    const link = projectPreview?.querySelector("[data-project-link]");

    projectChoices.forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
    choice.classList.add("is-active");
    choice.setAttribute("aria-pressed", "true");
    if (label) label.textContent = project.label;
    if (title) title.textContent = project.title;
    if (description) description.textContent = project.description;
    if (image) { image.style.backgroundImage = project.image ? `url("${project.image}")` : "none"; image.style.backgroundColor = project.available ? "" : "#27282a"; }
    if (link) {
      link.innerHTML = project.available
        ? `${project.action}<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>`
        : project.action;
      link.setAttribute("aria-disabled", String(!project.available));
      if (project.available) { link.href = project.href; link.target = "_blank"; link.rel = "noreferrer"; }
      else { link.removeAttribute("href"); link.removeAttribute("target"); }
    }
  });
});

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
