interface experience {
	cargo: string
	initial: string
	finish: string
	company: string
	descript:string
    technologies:string[]
}
export const experiences : experience[] = [
	{
		cargo:"Web Developer",
		initial:"Octubre,2021", 
		finish:"-" ,
		company:"Vertikal",
		descript:"Actualmente desarrollo sitios web y landing pages empleando Wordpress y theme Divi.",
		technologies:['/php_dark.svg','/wordpress.svg', '/DIVI 1.svg', '/javascript.svg','/html5.svg', '/css.svg'],
	},
	{
		cargo:"Web Developer" ,
        initial:"Octubre, 2019" ,
        finish:"Julio, 2021" ,
        company:"UAssistMe",
        descript:"Desarrollo de webapp para control de empleados 'AppUassistme' utilizando framework Laravel, también desarrolle sitios web con Wordpress y theme Divi.",
        technologies:['/php_dark.svg','/wordpress.svg', '/DIVI 1.svg', '/javascript.svg', '/csharp.svg', '/html5.svg', '/css.svg', '/bootstrap.svg'],
	},
	{
        cargo:"Web Developer" ,
        initial:"Octubre, 2018" ,
        finish:"Julio, 2019" ,
        company:"Dive_ Digital",
        descript:"Desarrollo de landing pages utilizando Wordpress, Javascript, HTML, CSS, CronJobs en servidor apache.",
        technologies:['/php_dark.svg','/wordpress.svg', '/javascript.svg', '/html5.svg', '/css.svg'],
	},
    {
        cargo:"Jr Developer",
        initial:"Marzo, 2018",
        finish:"Agosto, 2018",
        company:"Avalogics",
        descript:"Desarrollo de sitios web utilizando JavaScript, HTML, CSS, conociendo por primera vez el uso de Wordpress.",
        technologies:['/php_dark.svg','/wordpress.svg', '/DIVI 1.svg', '/javascript.svg', '/html5.svg', '/css.svg'],
    }
] as const