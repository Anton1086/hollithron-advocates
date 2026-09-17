import { site } from "./site";

export const chrome = {
  en: {
    skip: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    language: "Español",
    languageAria: "Cambiar el sitio al español",
    call: "Call",
    callCta: "Schedule a consultation",
    explore: "Explore our services",
    email: "Email us",
    directions: "Get directions",
    disclaimer:
      "The information on this website is solely for informational purposes and does not constitute legal advice or create an attorney-client relationship.",
    copyright: `© ${new Date().getFullYear()} ${site.name} All rights reserved.`,
    consultNote: `Consultations are by appointment only and generally incur a one-time fee of ${site.consultationFee}. We do not impose a time limit — we take the time needed to evaluate your case.`,
  },
  es: {
    skip: "Saltar al contenido principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    language: "English",
    languageAria: "Switch the site to English",
    call: "Llamar",
    callCta: "Programar una consulta",
    explore: "Conocer nuestros servicios",
    email: "Enviarnos un correo",
    directions: "Cómo llegar",
    disclaimer:
      "La información en este sitio web es únicamente informativa y no constituye asesoría legal ni crea una relación abogado-cliente.",
    copyright: `© ${new Date().getFullYear()} ${site.name} Todos los derechos reservados.`,
    consultNote: `Las consultas son solo con cita y generalmente tienen un cargo único de ${site.consultationFee}. No imponemos un límite de tiempo: tomamos el tiempo necesario para evaluar su caso.`,
  },
} as const;

export const formCopy = {
  en: {
    title: "Send a message",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    message: "How can we help?",
    send: "Send message",
    sending: "Opening email…",
    successTitle: "Your email draft is ready",
    successBody: `If your email app did not open, write to ${site.email}. Please allow up to two business days for a response.`,
    errorName: "Please enter your name.",
    errorEmail: "Please enter a valid email address.",
    errorMessage: "Please tell us briefly how we can help.",
    privacy:
      "Submitting this form does not create an attorney-client relationship. Do not include sensitive case details in an unencrypted email.",
  },
  es: {
    title: "Enviar un mensaje",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    message: "¿En qué podemos ayudarle?",
    send: "Enviar mensaje",
    sending: "Abriendo el correo…",
    successTitle: "El borrador de su correo está listo",
    successBody: `Si no se abrió su aplicación de correo, escriba a ${site.email}. Por favor permita hasta dos días hábiles para una respuesta.`,
    errorName: "Por favor escriba su nombre.",
    errorEmail: "Por favor escriba un correo electrónico válido.",
    errorMessage: "Por favor cuéntenos brevemente cómo podemos ayudarle.",
    privacy:
      "Enviar este formulario no crea una relación abogado-cliente. No incluya detalles sensibles del caso en un correo sin cifrar.",
  },
} as const;
