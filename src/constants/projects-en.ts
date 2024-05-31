interface projects_content {
  id: string;
  title: string;
  image: string;
  description: string;
  url: string;
  skills: string[];
}
export const projects: projects_content[] = [
  {
    id: "1",
    title: "Matrices by ruth",
    image: "/matices/homepage.png",
    description: "Ecommerce for hair care",
    url: "https://maticesbyruth.com/",
    skills: ["php", "wordpress", "Divi", "javascript", "css"],
  },
  {
    id: "2",
    title: "ACM Prado - Online product catalog",
    image: "/acmprado/hero-acm-prado.webp",
    description:
      "This website constitutes a landing page with a product catalog for the ACM Prado distributor and a page with information about the company.",
    url: "https://acmprado.com/",
    skills: ["php", "wordpress", "Divi", "javascript", "css"],
  },
  {
    id: "3",
    title: "Vertikal - Development of web pages and online store",
    image: "/vertikal/vertikal-home.webp",
    description: "Informative website for the development company Vertikal.",
    url: "https://vertikal.com.sv/",
    skills: ["wordpress", "Divi", "javascript", "css"],
  },
  {
    id: "4",
    title: "MF Consultants - Business Consultants",
    image: "/mariof/mariof-home.webp",
    description:
      "Informative site on consulting services for the company MF-Consultores.",
    url: "https://mariofconsultores.com/",
    skills: ["php", "wordpress", "Divi", "javascript", "css"],
  },
] as const;
