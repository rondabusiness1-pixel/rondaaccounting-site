
const copy = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_blog: "Blog",
    nav_contact: "Contact",
    hero_title: "We support your business with accounting and tax solutions that give you peace of mind.",
    hero_sub: "Clarity, compliance, and cash flow—so you can focus on growth.",
    cta_book: "Book a Consultation",
    cta_call: "Call Now",
    stat_years: "+7",
    stat_years_label: "years helping businesses",
    stat_clients: "60+",
    stat_clients_label: "clients in trades & services",
    stat_rating: "5.0★",
    stat_rating_label: "average satisfaction",
    why_title: "Why choose Ronda Advisors?",
    why_p: "Professional bilingual firm serving contractors and SMBs with standardized processes and clear reporting.",
    services_title: "Our Services",
    services_sub: "End-to-end solutions to keep your business clean and compliant.",
    svc1: "Monthly Accounting",
    svc1p: "Monthly closes, reconciliations, reporting and KPIs for better decisions.",
    svc2: "Payroll (ADP)",
    svc2p: "Setup, weekly/biweekly runs, payroll taxes and reporting.",
    svc3: "Workers’ Compensation",
    svc3p: "Pay‑As‑You‑Go, stress‑free audits, correct class codes and COIs.",
    svc4: "Tax Preparation & Planning",
    svc4p: "Business & personal, S‑Corp/1065/1120, estimates and optimization.",
    svc5: "Tax Advisory",
    svc5p: "Entity choice, reasonable compensation, and proactive strategies.",
    svc6: "Executive Assistance",
    svc6p: "Invoicing, estimates, contracts and AR follow-ups for your ops.",
    wc_banner: "Pay‑As‑You‑Go Workers’ Comp — no surprises at audit time.",
    wc_cta: "Schedule now",
    testi_title: "What clients say",
    t1: "We moved from chaos to process. Payroll and Workers’ Comp are clean and predictable.",
    t2: "Clear monthly reports and advice that reduced our taxes.",
    t3: "Billing, contracts and collections streamlined—operations run smoother now.",
    blog_title: "Blog & Resources",
    b1: "LLC vs S‑Corp: What’s Best for Your Business?",
    b2: "How Pay‑As‑You‑Go Workers’ Comp Helps Cash Flow",
    b3: "Five Tax Deductions Small Business Owners Forget",
    contact_title: "Let’s talk about your business",
    contact_p: "Share your situation and we’ll propose the best plan.",
    form_name: "Full name",
    form_email: "Email",
    form_msg: "Message",
    form_send: "Send message",
    rights: "All rights reserved."
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre nosotros",
    nav_services: "Servicios",
    nav_blog: "Blog",
    nav_contact: "Contacto",
    hero_title: "Apoyamos tu negocio con soluciones contables y fiscales que te dan tranquilidad.",
    hero_sub: "Claridad, cumplimiento y flujo de caja—para que te enfoques en crecer.",
    cta_book: "Agendar cita",
    cta_call: "Llamar ahora",
    stat_years: "+7",
    stat_years_label: "años ayudando a negocios",
    stat_clients: "60+",
    stat_clients_label: "clientes en oficios y servicios",
    stat_rating: "5.0★",
    stat_rating_label: "satisfacción promedio",
    why_title: "¿Por qué elegir Ronda Advisors?",
    why_p: "Firma bilingüe que apoya a contratistas y PYMEs con procesos estandarizados y reportes claros.",
    services_title: "Nuestros Servicios",
    services_sub: "Soluciones integrales para mantener tu negocio en orden y al día.",
    svc1: "Contabilidad mensual",
    svc1p: "Cierres, conciliaciones, reportes y KPIs para decisiones más seguras.",
    svc2: "Payroll (ADP)",
    svc2p: "Configuración, nómina semanal/quincenal, impuestos y reportes.",
    svc3: "Workers’ Comp",
    svc3p: "Pay‑As‑You‑Go, auditorías sin estrés, códigos correctos y COIs.",
    svc4: "Impuestos (prep & planning)",
    svc4p: "Corporativos y personales, S‑Corp/1065/1120, estimados y optimización.",
    svc5: "Asesoría fiscal",
    svc5p: "Elección de entidad, sueldo razonable y estrategia proactiva.",
    svc6: "Asistencia ejecutiva",
    svc6p: "Facturación, estimados, contratos y seguimiento de cobros.",
    wc_banner: "Workers’ Comp Pay‑As‑You‑Go — sin sorpresas en auditorías.",
    wc_cta: "Agendar ahora",
    testi_title: "Lo que dicen nuestros clientes",
    t1: "Pasamos del caos al proceso. Nómina y Workers’ Comp claros y predecibles.",
    t2: "Reportes mensuales claros y recomendaciones que bajaron nuestros impuestos.",
    t3: "Facturación y cobros organizados—la operación es mucho más fluida.",
    blog_title: "Blog y Recursos",
    b1: "LLC vs S‑Corp: ¿Qué le conviene a tu negocio?",
    b2: "Cómo el Pay‑As‑You‑Go mejora tu flujo de caja",
    b3: "Cinco deducciones que los dueños suelen olvidar",
    contact_title: "Hablemos de tu negocio",
    contact_p: "Cuéntanos tu situación y te propondremos el mejor plan.",
    form_name: "Nombre completo",
    form_email: "Correo",
    form_msg: "Mensaje",
    form_send: "Enviar mensaje",
    rights: "Todos los derechos reservados."
  }
};

let lang = "en";

function t(key){ return copy[lang][key]; }

function render(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  // Stats
  document.getElementById("stat-years").textContent = t("stat_years");
  document.getElementById("stat-years-label").textContent = t("stat_years_label");
  document.getElementById("stat-clients").textContent = t("stat_clients");
  document.getElementById("stat-clients-label").textContent = t("stat_clients_label");
  document.getElementById("stat-rating").textContent = t("stat_rating");
  document.getElementById("stat-rating-label").textContent = t("stat_rating_label");

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
}

function switchLang(next){
  lang = next;
  document.documentElement.setAttribute("lang", lang);
  render();
}

// Initialize
document.addEventListener("DOMContentLoaded", ()=>{
  render();
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent("New inquiry from website");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:rondabusiness1@gmail.com?subject=${subject}&body=${body}`;
  });
});
