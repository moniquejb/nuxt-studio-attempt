export interface Branding {
	id: string;
	name: string;
	logo: {
		srcUrl: string;
		alt: string;
		url: string;
	};
	description: string;
	customTemplate?: string;
}