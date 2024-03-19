interface projects_content {
	id: string
	title: string
	image: string
	description: string
	url:string
}
export const projects : projects_content[] = [
	{
		id:"1",
		title:"ACM Prado",
		image:"/acmprado/hero-acm-prado.webp",
		description:"Catalogo de productos para la distribuidora ACM Prado",
		url:"/proyectos/acm-prado",
	},
	{
		id:"2",
		title:"ACM Prado",
		image:"/acmprado/hero-acm-prado.webp",
		description:"Catalogo de productos para la distribuidora ACM Prado",
		url:"/proyectos/acm-prado",
	},
	{
		id:"3",
		title:"ACM Prado",
		image:"/acmprado/hero-acm-prado.webp",
		description:"Catalogo de productos para la distribuidora ACM Prado",
		url:"/proyectos/acm-prado",
	}
] as const