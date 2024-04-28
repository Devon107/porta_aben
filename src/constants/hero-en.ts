interface heroinfo {
  name: string
  image: string
  cargo: string
  funcion: string
  technologies: string[]
  contacto: { text: string, link: string }[]
  idioms: { text: string, level: string }[]
}
export const hero : heroinfo = {
      name:"Abinadi Henríquez",
  image:"/400049335_10228214801187124_5648549841730663410_n.webp",
  cargo:"Web Developer",
  funcion:"Full Stack",
  technologies:['php','csharp','wordpress', 'Divi', 'react', 'astro', 'javascript','typescript','html5', 'css', 'bootstrap', 'tailwindcss','sqlite','mysql'],
  contacto:[ { text: 'Linkedin', link: 'https://www.linkedin.com/in/abinadi-henriquez/' }, { text: 'Github', link: 'https://github.com/Devon107' }, {text: 'elmerg.uam@gmail.com', link: 'mailto:elmerg.uam@gmail.com'} ],
      idioms:[{ text: 'Spanish', level: 'Native' }, { text: 'English', level: 'Upper Intermediate' }]
} as const