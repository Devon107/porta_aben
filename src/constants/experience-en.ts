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
		initial:"October,2021", 
		finish:"" ,
		company:"Vertikal Company",
		descript:"I currently develop static websites, e-commerce and landing pages.",
		technologies:['php','wordpress', 'Divi', 'javascript','html5', 'css'],
	},
	{
		cargo:"Web Developer" ,
        initial:"October, 2019" ,
        finish:"July, 2021" ,
        company:"U Assist Me",
        descript:"Development of software for employee control 'App Uassistme', also developing static websites and e-commerce.",
        technologies:['php', 'laravel','wordpress', 'Divi', 'javascript', 'csharp', 'html5', 'css', 'bootstrap','sqlite','mysql'],
	},
	{
        cargo:"Web Developer" ,
        initial:"October, 2018" ,
        finish:"July, 2019" ,
        company:"Dive_ Digital",
        descript:"Development of static websites, web applications and landing pages.",
        technologies:['php','wordpress', 'javascript', 'html5', 'css','bootstrap','mysql'],
	},
    {
        cargo:"Jr Developer",
        initial:"March, 2018",
        finish:"August, 2018",
        company:"Avalogics",
        descript:"Development of static websites, learning the use of Wordpress for the first time.",
        technologies:['php','wordpress', 'Divi', 'javascript', 'html5', 'css','sqlite','mysql'],
    }
] as const