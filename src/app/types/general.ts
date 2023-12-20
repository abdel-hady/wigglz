export interface HomeDataType {
	sliders: IMainSlider[];
	awards: IAward[];
	productCategories: IProductCategory[];
	facts: INutritionFact[];
	categories: IProductCategory[];
	testimonials: ITestimonial[];
}

export interface LocaleString {
	en: string;
	ar: string;
}
export interface IMainSlider {
	id: string;
	image: string;
}

export interface IAward {
	id: string;
	image: string;
	name: LocaleString;
}

export interface INutritionFact {
	id: string;
	image: string;
	title: LocaleString;
	description: LocaleString;
}

export interface IProductCategory {
	id: string;
	name: LocaleString;
	image?: string;
}

export interface IPetStory {
	id: string;
	video: string;
	name: string;
	description: string;
}

export interface ITestimonial {
	image: string;
	name: LocaleString;
	description: LocaleString;
}
