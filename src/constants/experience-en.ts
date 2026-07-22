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
      "Development of statistical websites, e-commerce, web applications and landing pages. Management of Google tag manager and Google analytics.",
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
    initial: "October,2021",
    finish: "June, 2024",
    company: "Vertikal Company",
    descript:
      "Development of statistical websites, e-commerce and landing pages.",
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
    initial: "October, 2019",
    finish: "July, 2021",
    company: "U Assist Me",
    descript:
      "Development of software for employee control 'App Uassistme', also developing statistical websites and e-commerce.",
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
    initial: "October, 2018",
    finish: "July, 2019",
    company: "Dive_ Digital",
    descript:
      "Development of statistical websites, web applications and landing pages.",
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
    initial: "March, 2018",
    finish: "August, 2018",
    company: "Avalogics",
    descript:
      "Development of statistical websites, learning the use of Wordpress for the first time.",
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
