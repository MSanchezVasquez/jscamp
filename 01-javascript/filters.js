import { state } from "./config.js";

state.count++;

console.log(state);

/* const filterLocation = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filterLocation.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");

  const selectedValue = filterLocation.value;

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }

  jobs.forEach((job) => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute("data-modalidad");
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", isShown === false);
  });
}); */

// --- Referencias a los selectores y mensajes ---
const filterLocation = document.querySelector("#filter-location");
const filterTechnology = document.querySelector("#filter-technology");
const filterExperience = document.querySelector("#filter-experience-level");

const mensajeLocation = document.querySelector("#filter-selected-value");
const mensajeExperience = document.querySelector(
  "#filter-experience-selected-value"
);

// --- Función principal para filtrar ---
function filtrarEmpleos() {
  const jobs = document.querySelectorAll(".job-listing-card");

  const selectedLocation = filterLocation.value;
  const selectedTechnology = filterTechnology.value;
  const selectedExperience = filterExperience.value;

  // Actualiza los mensajes visibles
  mensajeLocation.textContent = selectedLocation
    ? `Ubicación: ${selectedLocation}`
    : "";
  mensajeExperience.textContent = selectedExperience
    ? `Nivel: ${selectedExperience}`
    : "";

  jobs.forEach((job) => {
    const jobLocation = job.getAttribute("data-modalidad") || "";
    const jobTech = (job.getAttribute("data-technology") || "").toLowerCase();
    const jobExperience = job.getAttribute("data-nivel") || "";

    // Aplica las condiciones combinadas
    const matchLocation =
      selectedLocation === "" || selectedLocation === jobLocation;
    const matchTechnology =
      selectedTechnology === "" ||
      jobTech
        .split(",")
        .some((t) => t.trim() === selectedTechnology.toLowerCase());
    const matchExperience =
      selectedExperience === "" || selectedExperience === jobExperience;

    const isVisible = matchLocation && matchTechnology && matchExperience;

    job.classList.toggle("is-hidden", !isVisible);
  });
}

// --- Escuchadores de eventos ---
filterLocation.addEventListener("change", filtrarEmpleos);
filterTechnology.addEventListener("change", filtrarEmpleos);
filterExperience.addEventListener("change", filtrarEmpleos);

const searchInput = document.getElementById("empleos-search-input");
searchInput.addEventListener("input", filtrarInput);

function filtrarInput() {
  const jobs = document.querySelectorAll(".job-listing-card");

  jobs.forEach((job) => {
    const titulo = job.querySelector("h3");
    const textoTitulo = titulo ? titulo.textContent.toLowerCase() : "";
    const textoBusqueda = searchInput.value.toLowerCase();

    job.classList.toggle("is-hidden", !textoTitulo.includes(textoBusqueda));
  });
}
