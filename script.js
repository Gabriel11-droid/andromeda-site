/* ============================================================
   ANDROMEDA — interações da página
   ============================================================ */

// Fundo da navbar ao rolar
const nav = document.getElementById("nav");
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Animação de entrada das seções (fade-up)
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  // Fallback: mostra tudo
  reveals.forEach((el) => el.classList.add("in"));
}
