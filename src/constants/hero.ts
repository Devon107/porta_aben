interface heroinfo {
    name: string
    image: string
    cargo: string
    funcion: string
    technologies: string[]
    contacto: { text: string, link: string }[]
}
export const hero : heroinfo = {
        name:"Abinadi Henríquez",
		image:"/098A3B61-B83D-4CED-804E-A5B738D86AE3_1_105_c.jpeg",
		cargo:"Desarrollador Web",
		funcion:"Full Stack, Apps de escritorio",
		technologies:['/php_dark.svg','/csharp.svg','/wordpress.svg', '/DIVI 1.svg', '/react.svg', '/astro_dark.svg', '/javascript.svg','/typescript.svg','/html5.svg', '/css.svg', '/bootstrap.svg', '/tailwindcss.svg'],
		contacto:[ { text: 'Linkedin', link: 'https://www.linkedin.com/in/abinadi-henriquez/' }, { text: 'Github', link: 'https://github.com/Devon107' }, {text: 'elmerg.uam@gmail.com', link: 'mailto:elmerg.uam@gmail.com'} ],
} as const