export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      stack: "Stack",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      themeToggleDark: "Cambiar a modo claro",
      themeToggleLight: "Cambiar a modo oscuro",
      langToggle: "Switch to English",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      menuAriaLabel: "Menú de navegación",
    },
    presentation: {
      availability: "Abierto a oportunidades",
      descriptionPart1: "+3 años de experiencia.",
      descriptionHighlight: " Ingeniero en Desarrollo de Software ",
      descriptionPart2: "de Chiapas, México. Especializado en el desarrollo de aplicaciones web atractivas y funcionales.",
      descriptionCta: " Let's code!",
      cvButton: "Ver CV",
      cvAriaLabel: "Ver CV de Luis Hernández en PDF",
      contactButton: "Contáctame",
      stats: [
        { value: 3, suffix: "+", label: "Años de experiencia" },
        { value: 10, suffix: "+", label: "Proyectos completados" },
        { value: 12, suffix: "+", label: "Tecnologías" },
      ],
      imgAlt: "Foto de Luis Hernández",
    },
    services: {
      heading: "Ofrezco los siguientes servicios",
      cards: [
        {
          title: "Desarrollo Web",
          description:
            "Me encargaré de crear tu sitio web con las mejores prácticas de programación y perfectamente visible en todo tipo de dispositivos.",
        },
        {
          title: "Diseño Web",
          description:
            "¿Quieres una nueva imagen en la web para tu marca o negocio? Puedo hacer el diseño para destacar y atraer más clientes.",
        },
        {
          title: "Clases en Línea",
          description:
            "¿Te interesa aprender sobre programación? Te enseño mediante clases 100% personalizadas que se adaptan a tus horarios.",
        },
      ],
    },
    stack: {
      heading: "Mi stack de desarrollo",
      tooltips: {
        htmlCssSass: "Maquetado y estilos",
        jsTs: "Lenguajes principales",
        react: "Framework UI",
        next: "Framework Full-Stack",
        node: "Runtime Backend",
        mysql: "Base de datos relacional",
        mongodb: "Base de datos NoSQL",
        postgresql: "Base de datos relacional",
        tailwind: "Framework CSS",
        bootstrap: "Framework CSS",
        python: "Lenguaje backend / scripting",
        git: "Control de versiones",
      },
    },
    experience: {
      heading: "Experiencia laboral",
    },
    education: {
      heading: "Formación académica",
      degree: "Ingeniería en Desarrollo de Software",
      university: "Universidad Politécnica de Chiapas",
      date: "Septiembre 2019 - Diciembre 2022",
      logoAlt: "Logo de UPCHiapas",
    },
    projects: {
      heading: "Proyectos",
      filterAll: "Todos",
      filterFrontend: "Frontend",
      githubAriaLabel: "Ver código de {title} en GitHub",
      behanceAriaLabel: "Ver {title} en Behance",
    },
    contact: {
      heading: "Contacto",
      subtitle:
        "Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar. ¡Escríbeme!",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame en qué puedo ayudarte...",
      submitButton: "Enviar mensaje",
      sendingButton: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successText: "Gracias por escribirme, te responderé lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      defaultError: "Error al enviar el mensaje. Intenta de nuevo.",
    },
    footer: {
      credits: "Diseñado y desarrollado por... ",
      creditsHighlight: " ¡mi! ",
      copyrightName: " Luis Hernández",
      allRights: ". Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      stack: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      themeToggleDark: "Switch to light mode",
      themeToggleLight: "Switch to dark mode",
      langToggle: "Cambiar a Español",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      menuAriaLabel: "Navigation menu",
    },
    presentation: {
      availability: "Open to opportunities",
      descriptionPart1: "+3 years of experience.",
      descriptionHighlight: " Software Development Engineer ",
      descriptionPart2:
        "from Chiapas, Mexico. Specialized in building attractive and functional web applications.",
      descriptionCta: " Let's code!",
      cvButton: "View CV",
      cvAriaLabel: "View Luis Hernández's CV in PDF",
      contactButton: "Contact me",
      stats: [
        { value: 3, suffix: "+", label: "Years of experience" },
        { value: 10, suffix: "+", label: "Completed projects" },
        { value: 12, suffix: "+", label: "Technologies" },
      ],
      imgAlt: "Photo of Luis Hernández",
    },
    services: {
      heading: "Services I offer",
      cards: [
        {
          title: "Web Development",
          description:
            "I'll build your website following best coding practices, fully responsive and optimized across all devices.",
        },
        {
          title: "Web Design",
          description:
            "Want a fresh online look for your brand or business? I can design it to stand out and attract more clients.",
        },
        {
          title: "Online Classes",
          description:
            "Interested in learning programming? I teach through 100% personalized classes that fit your schedule.",
        },
      ],
    },
    stack: {
      heading: "My development stack",
      tooltips: {
        htmlCssSass: "Markup and styles",
        jsTs: "Primary languages",
        react: "UI Framework",
        next: "Full-Stack Framework",
        node: "Backend Runtime",
        mysql: "Relational database",
        mongodb: "NoSQL database",
        postgresql: "Relational database",
        tailwind: "CSS Framework",
        bootstrap: "CSS Framework",
        python: "Backend / scripting language",
        git: "Version control",
      },
    },
    experience: {
      heading: "Work experience",
    },
    education: {
      heading: "Academic background",
      degree: "Software Development Engineering",
      university: "Universidad Politécnica de Chiapas",
      date: "September 2019 - December 2022",
      logoAlt: "UPCHiapas logo",
    },
    projects: {
      heading: "Projects",
      filterAll: "All",
      filterFrontend: "Frontend",
      githubAriaLabel: "View {title} code on GitHub",
      behanceAriaLabel: "View {title} on Behance",
    },
    contact: {
      heading: "Contact",
      subtitle:
        "I'm available for freelance projects, collaborations, or just a chat. Write to me!",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email address",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me how I can help you...",
      submitButton: "Send message",
      sendingButton: "Sending...",
      successTitle: "Message sent!",
      successText: "Thanks for reaching out, I'll get back to you as soon as possible.",
      sendAnother: "Send another message",
      defaultError: "Error sending the message. Please try again.",
    },
    footer: {
      credits: "Designed and developed by... ",
      creditsHighlight: " me! ",
      copyrightName: " Luis Hernández",
      allRights: ". All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations["es"];
