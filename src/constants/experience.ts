interface experience {
  cargo: string;
  initial: string;
  finish: string;
  company: string;
  descript: string;
  technologies: string[];
}
export const experiences: experience[] = [
  {
    cargo: "Web Developer",
    initial: "June, 2024",
    finish: "",
    company: "LeadX Marketing",
    descript:
      "Desarrollo de sitios web estaticos, e-commerce, Aplicativos web y landing pages. Manejo de Google tag manager y Google analitycs.",
    technologies: [
      "php",
      "wordpress",
      "shopify",
      "webflow",
      "Divi",
      "javascript",
      "html5",
      "css",
      "laravel",
      "mysql",
      "tailwindcss",
      "nextjs",
      "react",
    ],
  },
  {
    cargo: "Web Developer",
    initial: "Octubre,2021",
    finish: "Junio, 2024",
    company: "Vertikal",
    descript: "Desarrollo sitios web estáticos, e-commerce y landing pages.",
    technologies: [
      "php",
      "wordpress",
      "Divi",
      "javascript",
      "html5",
      "css",
      "laravel",
    ],
  },
  {
    cargo: "Web Developer",
    initial: "Octubre, 2019",
    finish: "Julio, 2021",
    company: "UAssistMe",
    descript:
      "Desarrollo de software para control de empleados 'AppUassistme', también desarrolle sitios web estáticos y e-commerce.",
    technologies: [
      "php",
      "laravel",
      "wordpress",
      "Divi",
      "javascript",
      "csharp",
      "html5",
      "css",
      "bootstrap",
      "sqlite",
      "mysql",
    ],
  },
  {
    cargo: "Web Developer",
    initial: "Octubre, 2018",
    finish: "Julio, 2019",
    company: "Dive_ Digital",
    descript:
      "Desarrolle sitios web estáticos, aplicativos web y landing pages.",
    technologies: [
      "php",
      "wordpress",
      "javascript",
      "html5",
      "css",
      "bootstrap",
      "mysql",
    ],
  },
  {
    cargo: "Jr Developer",
    initial: "Marzo, 2018",
    finish: "Agosto, 2018",
    company: "Avalogics",
    descript:
      "Desarrollo de sitios web estáticos, conociendo por primera vez el uso de Wordpress.",
    technologies: [
      "php",
      "wordpress",
      "Divi",
      "javascript",
      "html5",
      "css",
      "sqlite",
      "mysql",
    ],
  },
] as const;
