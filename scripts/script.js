import { calculateAge } from "./edad.js";

function showAge(fecha, elementoID) {
  const { years, months, days } = calculateAge(fecha);
  const texto = `${years} años, ${months} meses y ${days} días`;

  const el = document.getElementById(elementoID);
  if (el) el.textContent = texto;
}

document.addEventListener("DOMContentLoaded", () => {
  showAge("2004-02-24", "calculate-age");
});

window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('animated-title');
  const text = title.textContent;
  title.textContent = ''; // Limpiar texto original

  // Por cada letra, crea un span con animación retrasada
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // espacio no rompible
    span.style.animationDelay = `${index * 0.1}s`;
    title.appendChild(span);
  });
});