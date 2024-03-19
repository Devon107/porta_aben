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
		image:"/098A3B61-B83D-4CED-804E-A5B738D86AE3_1_105_c.jpeg",
		cargo:"Desarrollador Web",
		funcion:"Full Stack, Apps de escritorio",
		technologies:['php','csharp','wordpress', 'Divi', 'react', 'astro', 'javascript','typescript','html5', 'css', 'bootstrap', 'tailwindcss','sqlite','mysql'],
		contacto:[ { text: 'Linkedin', link: 'https://www.linkedin.com/in/abinadi-henriquez/' }, { text: 'Github', link: 'https://github.com/Devon107' }, {text: 'elmerg.uam@gmail.com', link: 'mailto:elmerg.uam@gmail.com'} ],
        idioms:[{ text: 'Español', level: 'Nativo' }, { text: 'Inglés', level: 'Intermedio' }]
} as const