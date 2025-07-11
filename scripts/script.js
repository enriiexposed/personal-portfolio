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