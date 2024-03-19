interface projects_content {
	id: string
	title: string
	image: string
	description: string
	url:string
	skills: string[]
}
export const projects : projects_content[] = [
	{
		id:"1",
		title:"ACM Prado - Catálogo de productos en linea",
		image:"/acmprado/hero-acm-prado.webp",
		description:"Este sitio web constituye un landing page con un catálogo de productos para la distribuidora ACM Prado y una página con información acerca de la empresa.",
		url:"https://acmprado.com/",
		skills:['php','wordpress','Divi','javascript','css']
	},
	{
		id:"2",
		title:"Vertikal - Desarrollo de paginas web y tienda en línea",
		image:"/vertikal/vertikal-home.webp",
		description:"Sitio web informativo para la empresa desarrolladora Vertikal",
		url:"https://vertikal.com.sv/",
		skills:['wordpress','Divi','javascript','css']
	},
	{
		id:"3",
		title:"MF Consultores - Consultores de Negocios",
		image:"/mariof/mariof-home.webp",
		description:"Sitio informativo sobre servicios de consultoria para la empresa MF-Consultores",
		url:"https://mariofconsultores.com/",
		skills:['php','wordpress','Divi','javascript','css']
	}
] as const