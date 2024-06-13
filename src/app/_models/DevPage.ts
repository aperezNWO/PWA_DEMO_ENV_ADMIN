export interface DevPage {
	id               : number;
	name             : string;
    description      : string;
    framework        : string;
	frameworkVersion : string;
    uixFramework     : string;    
    urlPage          : string;
	urlRepo          : string;
}

export interface _SearchResult {
	countries: DevPage[];
	total    : number;
}