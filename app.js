const getBudget = price => price < 1000 ? "Bajo" : price <= 5000 ? "Medio" : "Alto";

const programs = [
  { id: 1, type: "Diplomado", categoria: "Diplomado", title: "Postítulo en Psicoterapia para el Tratamiento de Adicciones: Aproximación Neuroafectiva Constructivista", price: 14200, presupuesto: getBudget(14200), budget: "high", escuela: "Escuela de Salud Mental Adultos", professions: ["psicologia", "medicina", "trabajo-social"], modalidad: "Sincrónico", duracion: "Larga", publico: "Adultos", pitch: "Especialízate en el tratamiento de adicciones con una mirada neuroafectiva y constructivista." },
  { id: 2, type: "Curso", categoria: "Curso", title: "Neurociencias de los vínculos afectivos y las relaciones de pareja", price: 590, presupuesto: getBudget(590), budget: "low", escuela: "Escuela de Salud Mental Adultos", professions: ["psicologia", "medicina", "trabajo-social"], modalidad: "Sincrónico", duracion: "Corta", publico: "Parejas", pitch: "Comprende cómo se construyen los vínculos afectivos para enriquecer tu práctica profesional." },
  { id: 3, type: "Curso", categoria: "Curso", title: "Técnicas de Terapia Cognitivo Conductual en Infancia", price: 590, presupuesto: getBudget(590), budget: "low", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Corta", publico: "Infantil/Adolescentes", pitch: "Incorpora técnicas cognitivo-conductuales concretas para acompañar a niños y niñas." },
  { id: 4, type: "Acreditación", categoria: "Acreditación", title: "Acreditación Oficial Introductoria de Terapia Basada en LEGO®", price: 2490, presupuesto: getBudget(2490), budget: "medium", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Media", publico: "Infantil/Adolescentes", pitch: "Descubre una herramienta creativa para facilitar la expresión y el trabajo terapéutico." },
  { id: 5, type: "Curso", categoria: "Curso", title: "Evaluación y Escalas de Detección en Trastorno por Déficit de Atención e Hiperactividad (TDAH)", price: 540, presupuesto: getBudget(540), budget: "low", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "medicina", "educacion"], modalidad: "Sincrónico", duracion: "Corta", publico: "Infantil/Adolescentes", pitch: "Conoce escalas y criterios para orientar la detección del TDAH con mayor precisión." },
  { id: 6, type: "Curso", categoria: "Curso", title: "Certificación en Escala Wechsler de Inteligencia para Niños® (WISC®-V)", price: 890, presupuesto: getBudget(890), budget: "low", escuela: "Escuela de Educación y Neurodesarrollo", professions: ["psicologia", "educacion"], modalidad: "Sincrónico", duracion: "Corta", publico: "Infantil/Adolescentes", pitch: "Fortalece tu evaluación cognitiva infantil con una certificación especializada en WISC®-V." },
  { id: 7, type: "Acreditación", categoria: "Acreditación", title: "Certificación Internacional PEERS® Adulto Joven", price: 6900, presupuesto: getBudget(6900), budget: "high", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Media", publico: "Adultos", pitch: "Acompaña el desarrollo de habilidades sociales en adultos jóvenes con respaldo internacional." },
  { id: 8, type: "Acreditación", categoria: "Acreditación", title: "Acreditación Oficial Clínica Internacional ADI-R", price: 6400, presupuesto: getBudget(6400), budget: "high", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "medicina", "educacion"], modalidad: "Sincrónico", duracion: "Media", publico: "Infantil/Adolescentes", pitch: "Obtén formación clínica internacional para la evaluación diagnóstica del autismo." },
  { id: 9, type: "Acreditación", categoria: "Acreditación", title: "Acreditación Oficial Internacional en AutPlay® Therapy", price: 1990, presupuesto: getBudget(1990), budget: "medium", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Media", publico: "Infantil/Adolescentes", pitch: "Integra el juego como vía de intervención terapéutica con una acreditación internacional." },
  { id: 10, type: "Diplomado", categoria: "Diplomado", title: "Diplomado de Especialización en Comunicación Aumentativa y Alternativa", price: 5900, presupuesto: getBudget(5900), budget: "high", escuela: "Escuela de Educación y Neurodesarrollo", professions: ["psicologia", "medicina", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Larga", publico: "General", pitch: "Especialízate en estrategias de comunicación para acompañar distintas necesidades de apoyo." },
  { id: 11, type: "Acreditación", categoria: "Acreditación", title: "Acreditación Oficial Internacional en AutPlay Therapy", price: 1990, presupuesto: getBudget(1990), budget: "medium", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Media", publico: "Infantil/Adolescentes", pitch: "Integra el juego como vía de intervención terapéutica con una acreditación internacional." },
  { id: 12, type: "Acreditación", categoria: "Acreditación", title: "Certificación Internacional PEERS Adolescentes", price: 6600, presupuesto: getBudget(6600), budget: "high", escuela: "Escuela de Salud Mental Infantojuvenil", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Sincrónico", duracion: "Media", publico: "Infantil/Adolescentes", pitch: "Desarrolla habilidades sociales en adolescentes con una certificación internacional especializada." },
  { id: 13, type: "Especialización", categoria: "Especialización", title: "Especialización en Test Proyectivos", price: 4200, presupuesto: getBudget(4200), budget: "medium", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia"], modalidad: "Asincrónico", duracion: "Larga", publico: "General", pitch: "Profundiza en el uso e interpretación de test proyectivos a tu propio ritmo." },
  { id: 14, type: "Acreditación", categoria: "Acreditación", title: "Acreditación Oficial Internacional Michael Page en Reclutamiento y Selección Estratégica", price: 8900, presupuesto: getBudget(8900), budget: "high", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia", "educacion"], modalidad: "Sincrónico", duracion: "Media", publico: "Adultos", pitch: "Fortalece tus procesos de reclutamiento y selección con una acreditación estratégica." },
  { id: 15, type: "Curso", categoria: "Curso", title: "Consideraciones Prácticas para el proceso de Reclutamiento y Selección", price: 540, presupuesto: getBudget(540), budget: "low", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia", "educacion", "trabajo-social"], modalidad: "Asincrónico", duracion: "Corta", publico: "Adultos", pitch: "Lleva criterios prácticos a cada etapa del proceso de reclutamiento y selección." },
  { id: 16, type: "Curso", categoria: "Curso", title: "Perfil de Cargo: Elemento Central en la Gestión de Personas", price: 540, presupuesto: getBudget(540), budget: "low", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia", "educacion"], modalidad: "Asincrónico", duracion: "Corta", publico: "Adultos", pitch: "Construye perfiles de cargo que conecten las necesidades del negocio con las personas." },
  { id: 17, type: "Curso", categoria: "Curso", title: "Estrés Laboral y Síndrome de Burnout: Abordaje psicológico efectivo", price: 540, presupuesto: getBudget(540), budget: "low", escuela: "Escuela de Psicología Organizacional", professions: ["psicologia", "medicina", "educacion", "trabajo-social"], modalidad: "Asincrónico", duracion: "Corta", publico: "Adultos", pitch: "Identifica y aborda el estrés laboral y el burnout con herramientas psicológicas efectivas." }
];

const form = document.querySelector("#filters-form");
const grid = document.querySelector("#results-grid");
const emptyState = document.querySelector("#empty-state");
const resultsFooter = document.querySelector("#results-footer");
const resultCount = document.querySelector("#result-count");
const toast = document.querySelector("#toast");

const money = value => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value);

function getFilteredPrograms() {
  const profession = document.querySelector("#profession").value;
  const school = document.querySelector("#school").value;
  const modality = document.querySelector("#modality").value;
  const certificationType = document.querySelector("#certification-type").value;
  const duration = document.querySelector("#duration").value;
  const audience = document.querySelector("#audience").value;
  const budget = new FormData(form).get("budget");
  return programs.filter(program => {
    const professionMatch = profession === "all" || program.professions.includes(profession);
    const schoolMatch = school === "all" || program.escuela === school;
    const modalityMatch = modality === "all" || program.modalidad === modality;
    const certificationMatch = certificationType === "all" || program.categoria === certificationType;
    const durationMatch = duration === "all" || program.duracion === duration;
    const audienceMatch = audience === "all" || program.publico === audience;
    const budgetMatch = budget === "all" || (budget === "low" ? program.categoria === "Curso" && program.presupuesto === "Bajo" : program.presupuesto.toLowerCase() === budget);
    return professionMatch && schoolMatch && modalityMatch && certificationMatch && durationMatch && audienceMatch && budgetMatch;
  });
}

function cardTemplate(program, index) {
  return `<article class="program-card" style="animation-delay: ${index * 70}ms">
    <div class="program-cover"><span class="cover-tag">${program.type}</span><span class="cover-number">0${index + 1}</span></div>
    <div class="card-body"><div class="card-meta"><span>${program.modalidad} · ${program.duracion}</span><span>${program.publico}</span></div>
      <h3>${program.title}</h3><p class="card-pitch">${program.pitch}</p>
      <div class="card-bottom"><div><span class="price-label">Inversión desde</span><span class="price">${money(program.price)}</span></div>
      <button class="copy-button" data-program-id="${program.id}" type="button"><span>↗</span> Copiar WhatsApp</button></div>
    </div></article>`;
}

function render() {
  const filtered = getFilteredPrograms().slice(0, 3);
  grid.innerHTML = filtered.map(cardTemplate).join("");
  const hasResults = filtered.length > 0;
  grid.hidden = !hasResults;
  emptyState.hidden = hasResults;
  resultsFooter.hidden = !hasResults;
  resultCount.textContent = filtered.length;
  document.querySelectorAll(".copy-button").forEach(button => button.addEventListener("click", () => copyProgram(button.dataset.programId)));
}

async function copyProgram(id) {
  const program = programs.find(item => item.id === Number(id));
  const paymentMessage = ["Diplomado", "Acreditación", "Especialización"].includes(program.categoria)
    ? "• *¿Formas de pago?* Aceptamos tarjetas de crédito, débito y opciones a meses sin intereses."
    : "• *¿Formas de pago?* Aceptamos tarjetas de crédito y opciones a meses sin intereses.";
  const message = `Hola, te recomiendo este programa de ADIPA:\n\n• ${program.title}\n• Modalidad: ${program.modalidad}\n• Inversión: ${money(program.price)}\n${paymentMessage}\n\nCreo que puede ser una excelente opción para tu desarrollo profesional. ¿Te gustaría conocer más?`;
  try { await navigator.clipboard.writeText(message); } catch { /* Clipboard fallback for local file previews. */
    const textArea = document.createElement("textarea"); textArea.value = message; document.body.appendChild(textArea); textArea.select(); document.execCommand("copy"); textArea.remove(); }
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

form.addEventListener("change", render);
document.querySelector("#reset-filters").addEventListener("click", () => { form.reset(); render(); });
document.querySelector("#empty-reset").addEventListener("click", () => { form.reset(); render(); });
document.querySelector("#sort-button").addEventListener("click", () => { document.querySelector("#sort-button").firstChild.textContent = "Ordenar: Precio más bajo "; });
render();